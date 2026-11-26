import { put, issueSignedToken, presignUrl } from '@vercel/blob';
import { Resend } from 'resend';
import type { NextRequest } from 'next/server';

const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

// 7 days: long enough to review an application, not indefinite
const LINK_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

// Applicant confirmation sender. talent@xlsigma.com is an M365 distribution list,
// so replies from applicants reach the team.
const CONFIRM_FROM     = process.env.CAREERS_CONFIRM_FROM ?? 'xlSigma Talent Community <talent@xlsigma.com>';
const CONFIRM_REPLY_TO = 'talent@xlsigma.com';

// Escape user input before placing it in email HTML
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Single plain address only; blocks lists or header-like input in the "to" field
const SIMPLE_EMAIL = /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/;

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
    const from   = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
    const to     = process.env.JOIN_US_NOTIFY_EMAIL ?? 'talent@xlsigma.com';

    console.log('[careers/route] Sending via Resend to:', to, '| from:', from, '| API key present:', !!process.env.RESEND_API_KEY);

    const e = {
      name:      escapeHtml(name),
      email:     escapeHtml(email),
      phone:     escapeHtml(phone),
      linkedin:  escapeHtml(linkedin),
      expertise: escapeHtml(expertise),
      message:   escapeHtml(message),
      fileName:  escapeHtml(file.name),
    };

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Talent Application - ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#1B3F7A;margin-bottom:16px">
          New Talent Community Application
        </h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;white-space:nowrap;vertical-align:top">Name</td>
            <td style="padding:6px 0">${e.name}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Email</td>
            <td style="padding:6px 0"><a href="mailto:${e.email}">${e.email}</a></td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Phone</td>
            <td style="padding:6px 0">${e.phone}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">LinkedIn</td>
            <td style="padding:6px 0">${e.linkedin || '-'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Expertise</td>
            <td style="padding:6px 0">${e.expertise || '-'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Message</td>
            <td style="padding:6px 0;white-space:pre-wrap">${e.message || '-'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Resume</td>
            <td style="padding:6px 0">
              <a href="${presignedUrl}" style="color:#8A6A1F">${e.fileName}</a>
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

    // Applicant confirmation. The application is already received at this point,
    // so a failure here is logged and the request still succeeds.
    if (SIMPLE_EMAIL.test(email)) {
      const firstName = name.split(/\s+/)[0];
      try {
        const confirm = await resend.emails.send({
          from:    CONFIRM_FROM,
          to:      email,
          replyTo: CONFIRM_REPLY_TO,
          subject: 'We received your application | xlSigma Talent Community',
          text: [
            `Hi ${firstName},`,
            '',
            'Thank you for joining the xlSigma Talent Community. We received your application and resume.',
            '',
            'Our team reviews every submission. When a project comes up that matches your expertise, we will reach out to you directly.',
            '',
            'Questions in the meantime? Just reply to this email.',
            '',
            'Regards,',
            'xlSigma Talent Community',
            'xlsigma.com',
          ].join('\n'),
          html: `
            <div style="font-family:sans-serif;font-size:15px;line-height:1.5;color:#1a1a1a">
              <p>Hi ${escapeHtml(firstName)},</p>
              <p>Thank you for joining the xlSigma Talent Community. We received your application and resume.</p>
              <p>Our team reviews every submission. When a project comes up that matches your expertise, we will reach out to you directly.</p>
              <p>Questions in the meantime? Just reply to this email.</p>
              <p>Regards,<br>xlSigma Talent Community<br><a href="https://www.xlsigma.com" style="color:#8A6A1F">xlsigma.com</a></p>
            </div>
          `,
        });
        if (confirm.error) {
          console.error('[careers/route] Confirmation email failed:', JSON.stringify(confirm.error));
        } else {
          console.log('[careers/route] Confirmation email sent:', confirm.data?.id);
        }
      } catch (confirmErr) {
        console.error('[careers/route] Confirmation email failed:', confirmErr);
      }
    } else {
      console.warn('[careers/route] Confirmation skipped: applicant email failed the format check');
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[careers/route] Error:', err);
    return Response.json({ error: 'Submission failed. Please try again later.' }, { status: 500 });
  }
}
