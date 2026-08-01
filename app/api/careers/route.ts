import { put, issueSignedToken, presignUrl } from '@vercel/blob';
import { Resend } from 'resend';
import type { NextRequest } from 'next/server';

const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

// 7 days â€” long enough to review an application, not indefinite
const LINK_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();

    const name      = (form.get('name')      as string | null)?.trim() ?? '';
    const email     = (form.get('email')     as string | null)?.trim() ?? '';
    const phone     = (form.get('phone')     as string | null)?.trim() ?? '';
    const linkedin  = (form.get('linkedin')  as string | null)?.trim() ?? '';
    const expertise = (form.get('expertise') as string | null)?.trim() ?? '';
    const message   = (form.get('message')   as string | null)?.trim() ?? '';
    const file      = form.get('resume') as File | null;

    if (!name || !email || !phone) {
      return Response.json({ error: 'Name, email, and phone are required.' }, { status: 400 });
    }
    if (!file || file.size === 0) {
      return Response.json({ error: 'A resume file is required.' }, { status: 400 });
    }

    const extOk = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!ALLOWED_MIME.includes(file.type) && !extOk) {
      return Response.json({ error: 'Resume must be a PDF, DOC, or DOCX file.' }, { status: 400 });
    }
    if (file.size > 5 * 1024 * 1024) {
      return Response.json({ error: 'Resume must be 5 MB or smaller.' }, { status: 400 });
    }

    const stamp    = new Date().toISOString().replace(/[:.]/g, '-');
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');

    // Upload to the private store
    const blob = await put(`careers/${stamp}-${safeName}`, file, { access: 'private' });

    // Issue a scoped delegation token, then build a 7-day presigned GET URL.
    // The recipient can open the resume from the email without needing Vercel credentials.
    const validUntil    = Date.now() + LINK_EXPIRY_MS;
    const signedToken   = await issueSignedToken({
      pathname:   blob.pathname,
      operations: ['get'],
      validUntil,
    });
    const { presignedUrl } = await presignUrl(signedToken, {
      operation:  'get',
      pathname:   blob.pathname,
      access:     'private',
      validUntil,
    });

    // noreply@xlsigma.com must be a verified sender in your Resend dashboard
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to     = process.env.JOIN_US_NOTIFY_EMAIL ?? 'talent@xlsigma.com';

    console.log('[careers/route] Sending via Resend to:', to, '| API key present:', !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from:    'noreply@xlsigma.com',
      to,
      subject: `New Talent Application â€” ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#1B3F7A;margin-bottom:16px">
          New Talent Community Application
        </h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;white-space:nowrap;vertical-align:top">Name</td>
            <td style="padding:6px 0">${name}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Email</td>
            <td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Phone</td>
            <td style="padding:6px 0">${phone}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">LinkedIn</td>
            <td style="padding:6px 0">${linkedin || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Expertise</td>
            <td style="padding:6px 0">${expertise || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Message</td>
            <td style="padding:6px 0;white-space:pre-wrap">${message || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Resume</td>
            <td style="padding:6px 0">
              <a href="${presignedUrl}" style="color:#B8820A">${file.name}</a>
              <span style="color:#888;font-size:12px"> (link valid 7 days)</span>
            </td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Submitted</td>
            <td style="padding:6px 0">${new Date().toUTCString()}</td>
          </tr>
        </table>
      `,
    });

    console.log('[careers/route] Resend result:', JSON.stringify(result));

    if (result.error) {
      throw new Error(`Resend API error: ${JSON.stringify(result.error)}`);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[careers/route] Error:', err);
    return Response.json({ error: 'Submission failed. Please try again later.' }, { status: 500 });
  }
}
