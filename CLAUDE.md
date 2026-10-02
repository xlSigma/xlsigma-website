@AGENTS.md

# Claude Session Notes - xlsigma-website

> This file is a working log for AI-assisted development sessions.
> It supplements HANDOFF.md (architecture reference) with guardrails, workflow,
> session history, decisions made, and pending items.

---

## Redesign Guardrails (apply to every session)

The site was redesigned (presentation only) to an editorial look: white and paper sections, navy
bands, serif display headlines. The work lives on the `redesign` branch and in draft PR #1 until it
is merged into `main`. These rules hold on that branch and after the merge.

- **Source of truth is the TSX files.** `xlsigma-files.ps1`, `xlsigma-write-handoff.ps1`, and `xlsigma-contact-checkboxes.ps1` are legacy: running `xlsigma-files.ps1` overwrites the redesign. Do not run them. HANDOFF.md is edited directly.
- **Copy freeze.** `CONTENT-INVENTORY.md` is the verbatim copy checkpoint for every page. No new text, no rewrites, no new sections unless the user asks. Report copy that does not fit a layout; do not edit it. When an approved copy change is made, update the inventory in the same commit.
- **Git.** Push only when the user asks in chat. Never merge into or push to `main` without explicit approval. Do not delete files without asking.
- **Business facts.** Never reference MBE or minority-owned status. Active certifications only: SDVOSB, Veteran-Owned SB, Florida OSD Veteran CBE (pending). SAM.gov registration appears only on the Government page. NAICS codes: 541511, 541611, 541614, 541618 only; flag any other code, do not silently fix. Company history references: Accenture, GE, Emerson (IBM removed).
- **Contact facts.** Phone (813) 539-8229 ("Call or text"). Mailing address: 4522 W Village Dr, Unit #1563, Tampa, FL 33624. Update every place if these change (footer, contact page, HANDOFF.md).
- **Preserve recent copy.** "Department of War" and "Public Health" labels; the Semantic-to-Action signature line placements (homepage teaser, Capabilities under the diagram, Commercial pull quote, and the Semantic-to-Action page hero; not in the homepage hero); lint and typo fixes. Write the trademark as Semantic-to-Action™.
- **No em dashes** in site copy or in comments you add.
- **Branding.** Home uses the banner image in the hero (no medallion). Interior pages use MedallionHero (medallion centered at the top of the navy hero). No small XL icon in the navbar; the "xlSigma" wordmark stays. Footer logo stays.
- **Color.** Gold #C9A24B on navy and for rules and buttons. Gold-on-white #8A6A1F for small text and numerals on light backgrounds. Use the Tailwind @theme tokens in `app/globals.css`; no hardcoded burnt-yellow values. Do not name a token `field` (Tailwind did not generate its classes); the input border token is `input-line`.
- **Accessibility.** Real buttons and links, 4.5:1 text contrast, visible focus states, labels tied to inputs by id, sensible alt text.
- **Primitives first.** Build pages from `app/components/ui/` (Section, ContentContainer, Eyebrow, Headline, Rule, Button, Tag, PullQuote, CapabilityRow, MedallionHero, form helpers). Section tone classes drive text and accent colors.

---

## How to Work on This Site

### Workflow Every Session
1. cd C:\dev\xlsigma-website
2. git pull
3. Read the relevant guide in `node_modules/next/dist/docs/` before writing framework code
4. Edit the TSX files (never the legacy scripts)
5. npm run lint and npm run build
6. Preview: `npm run dev` (http://localhost:3000), or the preview server on port 3001 via `.claude/launch.json`
7. git add, git commit with a clear message
8. git push only when asked; pushing a branch creates a Vercel preview, merging to `main` deploys to xlsigma.com

### Key Files
| File | Purpose |
|------|---------|
| `app/globals.css` | Tailwind v4 @theme tokens, tone classes, banner mask |
| `app/layout.tsx` | Fonts (Newsreader, Hanken Grotesk), NavBar, ScrollToTop, Footer |
| `app/page.tsx` | Homepage |
| `app/capabilities/page.tsx` | Capabilities, hub diagram, Semantic-to-Action diagram |
| `app/semantic-to-action/page.tsx` | Semantic-to-Action explainer |
| `app/commercial/page.tsx` | Commercial page |
| `app/government-contracting/page.tsx` | Government page, past performance |
| `app/careers/page.tsx`, `app/contact/page.tsx` | Forms (client components) |
| `app/components/ui/*` | Shared primitives |
| `app/components/NavBar.tsx`, `Footer.tsx`, `ScrollToTop.tsx` | Shared chrome |
| `CONTENT-INVENTORY.md` | Verbatim copy checkpoint and open flags |
| `HANDOFF.md` | Architecture, stack, DNS, deployment reference |
| `xlsigma-*.ps1` | Legacy generators. Do not run. |

### Tools Andres Has
- **VS Code** - preferred editor (`code filename` from terminal)
- **Notepad++** - alternate editor
- **PowerShell 7** (`pwsh`) on Windows 11 - use it for commands

### Preview Tooling Notes
- Tall-page screenshots can crop or time out. After resizing the viewport, navigate again and retry.
- Check mobile at 390px for horizontal overflow, and watch the console for errors.

---

## Session Log

### Session 1 - May 2026
**Goal:** Edit hero section text on homepage

**What was done:**
- Confirmed the site stack and set up a git rollback workflow (commit a snapshot before editing)
- Resolved a `git push` rejection (remote had newer commits; fixed with `git pull` first)
- Resolved an unexpected Vim editor during `git pull` merge (`:wq` to save and quit)
- Edited the homepage hero (via the old script workflow, now retired)

**Decisions made:**
- Trust git for rollback rather than keeping manual `.bak` files
- VS Code Auto Save is enabled

### Session 2 - October 2026 (redesign)
**Goal:** Redesign presentation only, in the style of an editorial consulting site, with copy frozen.

**What was done:**
- Created the `redesign` branch, wrote `CONTENT-INVENTORY.md` as the copy checkpoint, and added these guardrails
- Built the foundation (tokens, fonts, tone classes) and the shared primitives
- Rebuilt Home (banner hero blended into navy), Capabilities, Commercial, Government, Careers, Contact, and the footer
- Added the `/semantic-to-action` page (built outside the first pass; reviewed and accepted as baseline)
- Added `ScrollToTop`, tightened the navbar at 768px, restyled both diagrams
- Resolved flagged items: removed NAICS 541512, minority wording, em dashes, and Government spacing typos; kept SAM.gov on the Government page only
- Approved copy edits: Home headline without periods, Home hero services as a bullet list, Home bullets split and Bilingual removed, Government hero pills removed, Contact phone / "Call or text:" / mailing address, footer phone and "Call or text:"
- Opened draft PR #1 against `main`; Vercel preview is Ready

**Decisions made:**
- The TSX files are the source of truth; the old scripts are legacy
- Keep the signature line in the Semantic-to-Action page hero (fourth placement)
- Footer copyright keeps "Tampa, FL."
- Leave the seven-link navbar and the length of the Semantic-to-Action page as they are

---

## Pending / Future Work

- [ ] Review the Vercel preview for PR #1 on desktop and mobile, then mark it ready and merge to `main`
- [ ] Government past performance, U.S. Army / DoD entry: "reporting functionality)." has an unmatched closing parenthesis (needs the author's intent)
- [ ] Decide whether to commit `.claude/launch.json` or add `.claude/` to `.gitignore`
- [ ] Decide whether to delete the unused `app/components/Medallion.tsx` and the legacy `xlsigma-*.ps1` scripts (ask first)
- [ ] Consider a higher-resolution home banner (the current one is 1128x191 and soft on high-density screens)
- [ ] Confirm RESEND_FROM_EMAIL is set to noreply@xlsigma.com once the domain is verified in Resend
- [ ] Add more sessions to this log as work continues
