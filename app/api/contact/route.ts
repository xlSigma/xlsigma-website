import { Resend } from 'resend';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name    = (body.name    as string | undefined)?.trim() ?? '';
    const company = (body.company as string | undefined)?.trim() ?? '';
    const email   = (body.email   as string | undefined)?.trim() ?? '';
    const phone   = (body.phone   as string | undefined)?.trim() ?? '';
    const message = (body.message as string | undefined)?.trim() ?? '';

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from   = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
    const to     = process.env.CONTACT_NOTIFY_EMAIL ?? 'andresslack@xlsigma.com';

    console.log('[contact/route] Sending via Resend to:', to, '| from:', from, '| API key present:', !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Contact Form Submission – ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#1B3F7A;margin-bottom:16px">
          New Contact Form Submission
        </h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;white-space:nowrap;vertical-align:top">Name</td>
            <td style="padding:6px 0">${name}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Company</td>
            <td style="padding:6px 0">${company || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Email</td>
            <td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Phone</td>
            <td style="padding:6px 0">${phone || '&mdash;'}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Message</td>
            <td style="padding:6px 0;white-space:pre-wrap">${message}</td>
          </tr>
          <tr>
            <td style="padding:6px 20px 6px 0;font-weight:600;color:#1B3F7A;vertical-align:top">Submitted</td>
            <td style="padding:6px 0">${new Date().toUTCString()}</td>
          </tr>
        </table>
      `,
    });

    console.log('[contact/route] Resend result:', JSON.stringify(result));

    if (result.error) {
      throw new Error(`Resend API error: ${JSON.stringify(result.error)}`);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact/route] Error:', err);
    return Response.json({ error: 'Submission failed. Please try again later.' }, { status: 500 });
  }
}
