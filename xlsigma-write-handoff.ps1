# ============================================================
# xlSigma - Write HANDOFF.md to project folder
# Run from: C:\Users\andre\dev\xlsigma-website
# ============================================================

$ErrorActionPreference = 'Stop'

$handoff = @'
# xlSigma Website - Technical Handoff

Marketing website for xlSigma LLC (SDVOSB and Minority-Owned Small Business).
Built with Next.js 15 App Router, TypeScript strict, Tailwind CSS v4.
Live at: https://xlsigma.com

---

## Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Framework  | Next.js 15 (App Router, React 19)               |
| Language   | TypeScript (strict)                             |
| Styling    | Tailwind CSS v4 with custom @theme colors       |
| Forms      | Formspree (contact form submissions)            |
| Deploy     | Vercel                                          |
| DNS        | Vercel DNS (ns1.vercel-dns.com / ns2.vercel-dns.com) |
| Email      | Microsoft 365 Exchange                          |
| Domain     | Registered at DomainsPricedRight                |

---

## Repository

GitHub org: xlSigma
Repo: https://github.com/xlSigma/xlsigma-website
Local path: C:\Users\andre\dev\xlsigma-website
Default branch: main
Vercel auto-deploys on push to main.

---

## Local Development

    npm install
    npm run dev        # http://localhost:3000
    npx tsc --noEmit   # type-check only

---

## Pages

| Route                    | File                                    | Description                              |
|--------------------------|-----------------------------------------|------------------------------------------|
| /                        | app/page.tsx                            | Homepage - private sector audience       |
| /government-contracting  | app/government-contracting/page.tsx     | Federal primes audience                  |
| /capabilities            | app/capabilities/page.tsx               | All 8 service capabilities               |
| /contact                 | app/contact/page.tsx                    | Contact form with interest checkboxes    |

Shared components:
- app/components/NavBar.tsx  - Sticky navy header with mobile hamburger
- app/components/Footer.tsx  - Navy-dark footer with certifications and NAICS codes
- app/layout.tsx             - Root layout with Inter font, NavBar + Footer wrapper
- app/globals.css            - Tailwind v4 @theme custom color tokens

---

## Brand Colors (defined in app/globals.css)

    --color-navy:       #1B3F7A
    --color-navy-dark:  #122A54
    --color-navy-light: #2A5298
    --color-gold:       #B8820A
    --color-gold-light: #D4A017
    --color-gold-pale:  #FDF6E3

Usage in Tailwind classes: bg-navy, text-gold, border-gold/20, etc.

---

## Contact Form

File: app/contact/page.tsx
Form handler: Formspree
Formspree account email: info@xlsigma.com
FORMSPREE_URL constant is at the top of contact/page.tsx.

Form fields:
- Full Name (required)
- Company (required)
- Email (required)
- Phone (optional)
- Interest checkboxes - 3 categories, 5 items each:
  - Strategic Outcomes
  - Process-Specific Pain Points
  - Technical Methodology
- Message (required)

Checked items are submitted to Formspree as a semicolon-separated
"interests" field alongside the other form fields.

Submissions are delivered to: info@xlsigma.com

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
Note: DomainsPricedRight no longer manages DNS - all DNS is in Vercel.

---

## Company Information (used across pages)

Name: xlSigma LLC
Location: Tampa, FL
Phone: (703) 969-8177
Email: info@xlsigma.com
Certifications: SDVOSB, Minority-Owned Small Business, SAM.gov Registered
NAICS codes: 541511 | 541611 | 541614 | 541618

---

## Capabilities (8 total, shown on /capabilities page)

1. AI-Enabled Process Automation
2. Lean Six Sigma / Continuous Improvement
3. Advanced Analytics & Business Intelligence
4. Digital Transformation Strategy
5. Enterprise Technology Integration
6. Organizational Change Management
7. Financial Operations & Cost Optimization
8. Program & Project Management

---

## PowerShell Scripts (in project root)

These scripts were used to build the site and are committed to the repo.
They use Node.js embedded in PS1 single-quoted here-strings to avoid
Windows PowerShell 5.x UTF-8 encoding issues.

- xlsigma-files.ps1               - Creates/overwrites all site files
- xlsigma-contact-checkboxes.ps1  - Patches contact/page.tsx (preserves Formspree URL)

If making large changes, update xlsigma-files.ps1 and re-run it.
For targeted patches to contact/page.tsx, use or update xlsigma-contact-checkboxes.ps1.

---

## Known Quirks

- PowerShell encoding: all PS1 scripts use single-quoted here-strings (@'...'@)
  and Node.js for file writes to avoid Windows-1252 encoding issues with
  non-ASCII characters. Never use double-quoted here-strings or Write-Output
  to write file content.

- Tailwind v4: uses @theme in globals.css instead of tailwind.config.js.
  Custom color tokens (navy, gold, etc.) are available as utility classes.

- Logo: public/logo.png - the xlSigma logo PNG file.

- $home is a reserved PowerShell variable - the homepage content variable
  is named $homePage in xlsigma-files.ps1.

---

## Deployment

Push to main branch triggers automatic Vercel deployment.
No environment variables are required in Vercel - Formspree is client-side only.

To deploy manually:
    git add -A
    git commit -m "your message"
    git push
'@

Set-Content -LiteralPath "HANDOFF.md" -Value $handoff -Encoding utf8
Write-Host "Created: HANDOFF.md"

Write-Host ""
Write-Host "Now run:" -ForegroundColor Green
Write-Host "  git add HANDOFF.md"
Write-Host "  git commit -m 'Add HANDOFF.md'"
Write-Host "  git push"