# xlSigma Website - Technical Handoff

Marketing website for xlSigma LLC (SDVOSB and Veteran-Owned Small Business).
Built with Next.js 16.2.4 App Router, TypeScript strict, Tailwind CSS v4.
Live at: https://xlsigma.com

Status: an editorial redesign (white and warm off-white sections, deep navy bands, serif display
headlines) is complete on the `redesign` branch and open as a draft pull request (#1) against `main`.
Until it is merged, xlsigma.com still shows the previous design.

---

## Stack

| Layer      | Technology                                                          |
|------------|---------------------------------------------------------------------|
| Framework  | Next.js 16.2.4 (App Router, React 19)                               |
| Language   | TypeScript (strict)                                                 |
| Styling    | Tailwind CSS v4 with custom @theme tokens in app/globals.css        |
| Fonts      | Newsreader (serif display) and Hanken Grotesk (sans body), via next/font |
| Icons      | lucide-react                                                        |
| Forms      | Resend API (server-side, via /api/contact and /api/careers)         |
| File Store | Vercel Blob (resume uploads on careers form)                        |
| Deploy     | Vercel                                                              |
| DNS        | Vercel DNS (ns1.vercel-dns.com / ns2.vercel-dns.com)                |
| Email      | Microsoft 365 Exchange                                              |
| Domain     | Registered at DomainsPricedRight                                    |

This Next.js version has breaking changes from older releases. Before writing framework code,
read the relevant guide in `node_modules/next/dist/docs/`.

---

## Repository

GitHub org: xlSigma
Repo: https://github.com/xlSigma/xlsigma-website
Local path: C:\dev\xlsigma-website
Default branch: main
Vercel auto-deploys on push to main. Other branches get Vercel preview deployments automatically
(previews may sit behind Vercel Authentication, so sign in to Vercel to view them).

Branches:
- `main`: production.
- `redesign`: the full presentation redesign. Draft PR #1.
- `feature/semantic-to-action`: earlier branch for the Semantic-to-Action page; its work is already on `redesign`.

---

## Local Development

    npm install
    npm run dev        # http://localhost:3000
    npm run lint       # ESLint
    npx tsc --noEmit   # type-check only
    npm run build      # full production build check

A Claude Code preview config lives in `.claude/launch.json` (port 3001). It is not tracked in git.

---

## Pages & Routes

| Route                    | File                                    | Description                                              |
|--------------------------|-----------------------------------------|----------------------------------------------------------|
| /                        | app/page.tsx                            | Homepage, banner hero, private sector audience           |
| /capabilities            | app/capabilities/page.tsx               | All 10 capabilities, hub diagram, Semantic-to-Action diagram |
| /semantic-to-action      | app/semantic-to-action/page.tsx         | Long-form Semantic-to-Action explainer (13 sections)     |
| /commercial              | app/commercial/page.tsx                 | Commercial enterprises audience                          |
| /government-contracting  | app/government-contracting/page.tsx     | Federal primes audience, past performance                |
| /careers                 | app/careers/page.tsx                    | Talent community page and application form               |
| /contact                 | app/contact/page.tsx                    | Contact form and details                                 |
| /api/contact             | app/api/contact/route.ts                | Server route: sends email via Resend                     |
| /api/careers             | app/api/careers/route.ts                | Server route: uploads resume to Vercel Blob, sends email |

Shared components (app/components/):
- NavBar.tsx                  - Sticky navy header, desktop links and mobile menu (client component)
- Footer.tsx                  - Navy footer: brand, certifications, navigation, contact, NAICS
- ScrollToTop.tsx             - Forces scroll to the very top on every route change (skipped for #anchors)
- SemanticToActionDiagram.tsx - Six-stage architecture diagram (server component)

UI primitives (app/components/ui/):
- Section             - page band; variants white, paper, navy; sets the tone variables below
- ContentContainer    - max width and gutters
- Eyebrow, Headline, Rule, PullQuote, Tag
- Button              - primary (gold) and secondary (outline); renders a link or a real button
- CapabilityRow       - numbered row with thin rules (CapabilityList wraps rows)
- MedallionHero       - navy hero panel with the centered medallion, used on interior pages
- form.tsx            - Field (label tied to input by id) and INPUT_CLASS

Layout: app/layout.tsx sets the fonts, wraps pages in NavBar, ScrollToTop, and Footer, and sets
`data-scroll-behavior="smooth"` on <html> so Next does not animate route changes.

---

## Source of Truth and Workflow

The TSX files are the source of truth for all copy and layout. The old PowerShell generator scripts
(`xlsigma-files.ps1`, `xlsigma-write-handoff.ps1`, `xlsigma-contact-checkboxes.ps1`) were removed from the
repo because running them would have overwritten the redesign; they remain in git history. This file is
edited directly.

Typical change:
1. git pull
2. Edit the TSX files
3. npm run lint and npm run build
4. Preview locally, then commit
5. Push (a push to a branch creates a Vercel preview; a merge to main deploys to production)

Copy is frozen in `CONTENT-INVENTORY.md`. It lists every page's text and a list of open flags.
Change visible copy only on purpose, and update the inventory when you do.

---

## Design System (app/globals.css)

Colors (Tailwind @theme tokens, usable as bg-navy, text-gold, border-rule, and so on):

    navy #0B1F3A   navy-dark #07162A   navy-light #1B3A66
    paper #F4F2EA                      (warm off-white sections)
    gold #C9A24B   gold-bright #D9B965 (on navy, rules, buttons)
    gold-ink #8A6A1F                   (small text and numerals on white)
    gold-pale #FDF6E3
    ink #14202F    ink-muted #465163   (text on light sections)
    rule #D8D4C6   rule-navy #2B4162   input-line #7A8394
    banner-top #071319  banner-bottom #061018   (sampled from the home banner edges)

Tone variables: sections add a tone class (`tone-light`, `tone-paper`, `tone-navy`) that sets
`--fg`, `--fg-muted`, `--accent`, `--rule`, and button colors. Primitives read these variables, so
they work on any background. Paper uses a slightly darker accent (#826318) to keep 4.5:1 contrast.

Type: `--text-display`, `--text-headline`, `--text-title`, `--text-lead` (fluid sizes), `font-serif`
for headlines, `font-sans` for body. Spacing token `py-section`. Widths `max-w-content` and `max-w-prose`.

Rules of thumb:
- Gold on navy; gold-ink on white or paper for small text.
- Interior pages open with MedallionHero. Home uses the banner image (no medallion).
- Do not hardcode old burnt-yellow values (#B8820A, #D4A017).
- Do not name a color token `field`: Tailwind did not generate classes for it. The input border token is `input-line`.

---

## Home Banner

public/xlsigma_banner_260717.jpg is 1128x191. It is capped at its native width so it stays crisp,
and its edges fade into the hero background (see `.banner-mask` and the banner tokens). It is small
on phones, so its fine print is hard to read there. public/xlSigma Banner 1.png (1933x813) is a
higher-resolution alternative with a different layout and its own text.

---

## Contact Form

File: app/contact/page.tsx (client component)
API route: app/api/contact/route.ts

Form fields:
- Full Name (required)
- Company (required)
- Email (required)
- Phone (optional)
- Message (required)

Submissions trigger an HTML email via Resend to CONTACT_NOTIFY_EMAIL. The server route requires
name, email, and message. The page also marks company required.

---

## Careers / Join Us Form

File: app/careers/page.tsx (client component)
API route: app/api/careers/route.ts

Form fields (as shown on the page):
- Full Name (required)
- Email (required)
- Phone (required)
- LinkedIn (optional)
- Area of Expertise / Certifications (optional)
- Message / Cover Note (optional)
- Resume (required; PDF, DOC, or DOCX; max 5 MB; uploaded to Vercel Blob)

Submissions upload the resume to Vercel Blob (signed URL) and send an HTML notification email via
Resend to JOIN_US_NOTIFY_EMAIL.

---

## Environment Variables (Vercel)

| Variable              | Purpose                                              | Default fallback          |
|-----------------------|------------------------------------------------------|---------------------------|
| RESEND_API_KEY        | Resend API authentication                            | none (forms fail without) |
| RESEND_FROM_EMAIL     | Sender address for outbound emails                   | onboarding@resend.dev     |
| CONTACT_NOTIFY_EMAIL  | Inbox for contact form submissions                   | andresslack@xlsigma.com   |
| JOIN_US_NOTIFY_EMAIL  | Inbox for careers form submissions                   | talent@xlsigma.com        |
| BLOB_READ_WRITE_TOKEN | Vercel Blob token for resume file storage            | (Vercel provides this)    |

Note: xlsigma.com is verified in Resend (us-east-1, return path `send`) and RESEND_FROM_EMAIL is set to
noreply@xlsigma.com in Vercel (Production and Preview). If the variable is ever removed, the code falls
back to the onboarding@resend.dev sandbox sender, which can only deliver to the Resend account owner.

Resend DNS records live in Vercel DNS (added 2026-10-04): TXT `resend._domainkey` (DKIM), MX `send`
(priority 10), and TXT `send` (SPF). They sit on subdomains, so the Microsoft 365 root MX and SPF
records are untouched. Do not merge Resend into the root SPF record.

JOIN_US_NOTIFY_EMAIL has not been changed (checked 2026-10-04); its value is hidden in Vercel and an
earlier note says andresslack@xlsigma.com. A Careers test submission on 2026-10-04 was delivered to
andresslack@xlsigma.com under that setting.

talent@xlsigma.com exists as a Microsoft 365 distribution list ("Talent", created 2026-07-31), not a
mailbox, so it does not appear in Outlook. Members are andresslack@xlsigma.com and
tjdmochowski@xlsigma.com (Tom Dmochowski, on the list on purpose). "Allow external senders to email this
group" is ON. Delivery to it from Resend has not been tested. If JOIN_US_NOTIFY_EMAIL is ever pointed at
it, keep that setting ON (Resend sends from Amazon's servers, which Exchange treats as external, and a
list that blocks outside senders would reject the notification while Resend still reports success),
then redeploy and run a Careers test.

---

## Email

Provider: Microsoft 365 Exchange
Primary user mailbox: andresslack@xlsigma.com
Shared mailbox (no license used): info@xlsigma.com
  - andresslack@xlsigma.com is a member and can access it in Outlook
  - In Outlook Web: click profile picture -> Open another mailbox -> info@xlsigma.com

---

## DNS (managed in Vercel DNS panel)

Vercel > All Projects > Domains > xlsigma.com > DNS Records

Website records (managed automatically by Vercel):
- xlsigma.com     -> Vercel infrastructure
- www.xlsigma.com -> Vercel infrastructure

Microsoft 365 records (added manually):

| Type  | Name                  | Value                                                              |
|-------|-----------------------|--------------------------------------------------------------------|
| MX    | @                     | xlSigma-com.mail.protection.outlook.com (priority 0)              |
| TXT   | @                     | v=spf1 include:spf.protection.outlook.com -all                    |
| CNAME | autodiscover          | autodiscover.outlook.com                                          |
| CNAME | selector1._domainkey  | selector1-xlSigma-com._domainkey.xlSigmacom.onmicrosoft.com       |
| CNAME | selector2._domainkey  | selector2-xlSigma-com._domainkey.xlSigmacom.onmicrosoft.com       |

Domain registrar: DomainsPricedRight
Nameservers: ns1.vercel-dns.com / ns2.vercel-dns.com
Note: DomainsPricedRight no longer manages DNS. All DNS is in Vercel.

---

## Company Information (used across pages)

Name: xlSigma LLC
Location: Tampa, FL
Mailing address: 4522 W Village Dr, Unit #1563, Tampa, FL 33624 (shown on /contact)
Phone: (813) 539-8229 (call or text)
Email: info@xlsigma.com
Certifications: SDVOSB, Veteran-Owned Small Business, Florida OSD Veteran CBE (pending)
Registration: SAM.gov (shown on the Government page only)
NAICS codes: 541511 | 541512 | 541611 | 541614 | 541618
Company history references: Accenture, GE, Emerson

Business rules for copy: do not reference MBE or minority-owned status, and do not use em dashes.

---

## Capabilities (10 total, shown on /capabilities)

 1. Lean Six Sigma / DMAIC / Continuous Improvement
 2. AI, Agents & Intelligent Automation
 3. Logistics & Supply Chain
 4. Enterprise Knowledge & Semantic Transformation
 5. Operating Model Design & Strategy Deployment
 6. Data Analytics, KPI Frameworks & Dashboards
 7. Power BI, Tableau, Power Platform, Excel/VBA
 8. End-User Computing (EUC) Application Development
 9. Federal Program & Performance Management Support
10. Agile Delivery, Change & Stakeholder Management

---

## Semantic-to-Action Architecture

The xlSigma Semantic-to-Action architecture (always written with the trademark symbol) is the
strategic positioning framework connecting all capabilities. It appears in four places:

1. Home (/): teaser section with prose, a six-stage row (hidden on mobile), the signature line,
   and a button to /semantic-to-action.
2. Capabilities (/capabilities): section id="semantic-to-action" (scroll-mt-20) with the
   explanatory copy, the SemanticToActionDiagram on a paper panel, the signature line, and
   "Domain by domain. Process by process. Outcome by outcome."
3. Commercial (/commercial): the signature line as a pull quote.
4. /semantic-to-action: the full explainer, whose hero also carries the signature line.

Signature line: "We don't start with the AI agent. We model the business the agent must understand."
It is deliberately not in the Home hero.

SemanticToActionDiagram (app/components/SemanticToActionDiagram.tsx): server component, six stages in
an ordered list (01 Enterprise Systems & Knowledge, 02 Enterprise Semantic Foundation [featured],
03 Process & Policy, 04 Role & Authority, 05 AI Agents & Intelligent Automation, 06 Business
Outcomes). Vertical by default, horizontal at 1280px and up. It expects a tone-light parent.

---

## Known Quirks

- `ScrollToTop` exists because Next lands a new page at the top of its first element, which sits
  below the sticky header. It skips URLs with a #hash so anchor links still work.
- Tall-page screenshots taken through the preview tooling can crop or time out. Navigate again
  after resizing the viewport, or check pages structurally.
- "use client" components: NavBar, ScrollToTop, contact/page.tsx, careers/page.tsx. All others
  are server components.
- Open copy flags (if any) are listed in CONTENT-INVENTORY.md.

---

## Deployment

Push to main triggers an automatic Vercel production deployment. Push to any other branch triggers
a preview deployment (the URL is in the Vercel dashboard and in the bot comment on the pull request).

Required environment variables must be set in Vercel project settings
(Settings > Environment Variables) for both Production and Preview environments.

To ship the redesign: review the preview for pull request #1 on desktop and mobile, mark the
pull request ready, and merge it into main.

To deploy a normal change:
    git add -A
    git commit -m "your message"
    git push
