@AGENTS.md

# Claude Session Notes - xlsigma-website

> This file is a working log for AI-assisted development sessions.
> It supplements HANDOFF.md (architecture reference) with guardrails, workflow,
> session history, decisions made, and pending items.

---

## Redesign Guardrails (apply to every session)

The site was redesigned (presentation only) to an editorial look: white and paper sections, navy
bands, serif display headlines. The redesign is merged into `main` (PR #1, with follow-ups in PRs #2
and #3) and is live on xlsigma.com. These rules hold on `main` and on any working branch.

- **Source of truth is the TSX files.** The old generator scripts (`xlsigma-files.ps1` and friends) were removed; they are in git history only. Do not restore or run them. HANDOFF.md is edited directly.
- **Copy freeze.** `CONTENT-INVENTORY.md` is the verbatim copy checkpoint for every page. No new text, no rewrites, no new sections unless the user asks. Report copy that does not fit a layout; do not edit it. When an approved copy change is made, update the inventory in the same commit.
- **Git.** Push only when the user asks in chat. Never merge into or push to `main` without explicit approval. Do not delete files without asking.
- **Business facts.** Never reference MBE or minority-owned status. Active certifications only: SDVOSB, Veteran-Owned SB, Florida OSD Veteran CBE (pending). SAM.gov registration appears only on the Government page. NAICS codes: 541511, 541512, 541611, 541614, 541618 only (541512 re-added 2026-10-02 at Andres's direction); flag any other code, do not silently fix. Company history references: Accenture, GE, Emerson (IBM removed).
- **Contact facts.** Phone (813) 539-8229 ("Call or text"). Mailing address: 4522 W Village Dr, Unit #1563, Tampa, FL 33624. Update every place if these change (footer, contact page, HANDOFF.md).
- **No pricing on the website.** Pricing is never published. No prices, rates, fees, price ranges, "starting at" figures, or rate-card details in site copy, metadata, or `CONTENT-INVENTORY.md`, for any offering.
- **Preserve recent copy.** "Department of War" and "Public Health" labels; the Semantic-to-Action signature line placements (homepage teaser, Capabilities under the diagram, Commercial pull quote, and the Semantic-to-Action page hero; not in the homepage hero); lint and typo fixes. Write the trademark as Semantic-to-Action™.
- **Em dashes.** Allowed in site copy (approved 2026-10-03; the `--` stand-ins were converted). Never write `--` as a dash. Do not add em dashes to code comments.
- **Branding.** Home uses the banner image in the hero (no medallion). Interior pages use MedallionHero (medallion centered at the top of the navy hero). No small XL icon in the navbar; the "xlSigma" wordmark stays. Footer logo stays.
- **Color.** Gold #C9A24B on navy and for rules and buttons. Gold-on-white #8A6A1F for small text and numerals on light backgrounds. Use the Tailwind @theme tokens in `app/globals.css`; no hardcoded burnt-yellow values. Do not name a token `field` (Tailwind did not generate its classes); the input border token is `input-line`.
- **Accessibility.** Real buttons and links, 4.5:1 text contrast, visible focus states, labels tied to inputs by id, sensible alt text.
- **Primitives first.** Build pages from `app/components/ui/` (Section, ContentContainer, Eyebrow, Headline, Rule, Button, Tag, PullQuote, CapabilityRow, MedallionHero, form helpers). Section tone classes drive text and accent colors.
- **Semantic-to-Action™ canonical source.** The methodology is defined in OB1, not in this repo: the six-layer Reference Architecture, the Phase 0 through Phase 9 Implementation Methodology, the five-level and nine-dimension Maturity Model, and the Principle of Minimum Sufficient Semantics. Source of truth: the OB1 note "2026-10-02 - myMETA: xlSigma Semantic-to-Action Methodology Suite | Canonical V1 ..." (OB1 ID: 61b1f15a-b8f0-4299-8a58-8b73b6da0838), as amended by "2026-10-03 - myMETA: Semantic-to-Action | V1 Addendum A | Change Management and Adoption" (OB1 ID: 4f706a63-7e08-40d8-91f7-8a753eb61b00) and "2026-10-04 - myMETA: Semantic-to-Action™ | V1 Addendum B | Context Services" (OB1 ID: 38877751-de44-40c1-b361-120e5ba28a31). Also read the 2026-10-02 Supersession and Precedence Note (OB1 ID: 970b4c6c-e906-4adb-a323-06826c7dafbb) and the 2026-10-03 Knowledge Maturity Assessment note (OB1 ID: 51cf6fb9-3636-41ea-9bb7-a7efe925fe56). If an ID does not resolve, search OB1 by title and tell Andres. The 8/14/2026 charter is historical context except where the supersession note says it still governs (positioning language, offering direction, website strategy and operating model, remaining deferred items). Do not restate the methodology in this repo; read OB1.
- **Layer 6 naming.** The website six-stage chain says "Business Outcomes" (federal variant "Mission Outcomes"). The formal Layer 6 name in methodology documents is "Outcomes & Measurement". Same layer, named for different audiences. Do not change either.

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
- Removed the unused `Medallion.tsx` and the three legacy `xlsigma-*.ps1` scripts (approved)
- Opened draft PR #1 against `main`; Vercel preview is Ready

**Decisions made:**
- The TSX files are the source of truth; the old scripts are legacy
- Keep the signature line in the Semantic-to-Action page hero (fourth placement)
- Footer copyright keeps "Tampa, FL."
- Leave the seven-link navbar and the length of the Semantic-to-Action page as they are

### Session 3 - October 2026 (ship the redesign)
**Goal:** Push the redesign, review the preview, and merge to `main`.

**What was done:**
- Pushed `redesign` and reviewed the Vercel preview (Ready, checks passing)
- PR #1 was merged at the older head `335e821` before the last four approved commits were pushed, so they missed `main`: home hero reposition, hero CTA removal, Capabilities "What Sets xlSigma Apart" bullets, NAICS 541512
- Opened and merged PR #2 with those four commits; confirmed the production deploy (`fc01178`) succeeded and 541512 is live on the Government page and footer
- Added `.claude/` to `.gitignore`, shipped in PR #3 (`e7d3f2c`)
- Captured the NAICS 541512 decision in OB1
- Ran a mobile review of every page at 390px (no overflow, no console errors)
- PR #4: this Session 3 log. PR #5 (`46861ed`): form inputs 16px below `md` (stops iOS focus zoom) and the Capabilities hub SVG replaced by a list of the same nine areas below `md`; also gitignored `Claude outputs/`
- Commit `42e7a69` (home meta title "AI-Enabled Operations, Automation & Enterprise Transformation", approved) landed on `main` from another session; pulled it in
- Deleted the merged or stale branches `redesign`, `feature/semantic-to-action`, `fix/mobile-inputs-hub-labels`, `home-title-ai-enabled`
- Converted the 12 `--` stand-ins to em dashes across Home, Capabilities, Commercial, and Government, and updated CONTENT-INVENTORY.md in the same commit
- Gave Commercial, Government, Careers, and Contact their own tab titles (approved wording, built from each page H1; descriptions still inherit the root layout). Careers and Contact are client components, so their metadata lives in a small `layout.tsx` beside each page
- Set up Resend sending from xlsigma.com: added the domain in Resend, added the DKIM, `send` MX, and `send` SPF records in Vercel DNS, set `RESEND_FROM_EMAIL=noreply@xlsigma.com` (Production and Preview), and redeployed. A Contact form test email arrived from noreply@xlsigma.com. Details are in HANDOFF.md
- Reviewed `JOIN_US_NOTIFY_EMAIL` and decided to leave it unchanged. A Careers test submission was delivered to andresslack@xlsigma.com. talent@xlsigma.com exists as a two-member Microsoft 365 distribution list (external senders allowed) but delivery through it from Resend is untested

**Decisions made:**
- NAICS list is 541511, 541512, 541611, 541614, 541618; flag any other code
- `.claude/` and `Claude outputs/` are gitignored, so they stay local
- Keep the current home banner as-is
- Em dashes are allowed in site copy (reverses the earlier no-em-dash rule)

**Lessons:**
- After a PR is merged, new commits on its branch need a new PR. Check `git log origin/main..origin/<branch>` before assuming everything shipped.
- Pull before starting work: a commit from another session reached `main` while this session was open.

### Session 4 - 2026-10-04 (methodology alignment)
**Goal:** Point the repo notes at the canonical Semantic-to-Action™ V1 methodology in OB1.

**What was done:**
- Added the canonical-source and Layer 6 naming bullets to the Redesign Guardrails in CLAUDE.md, and a canonical-source paragraph to HANDOFF.md
- Searched `C:\dev` and project memory for stale methodology text (the 7-step method, seven layers, the Experience Layer, the old Knowledge Maturity scale) and found none
- Added a project memory note holding only the OB1 note titles and the Layer 6 naming rule
- Corrected the stale Branches list in HANDOFF.md

**Open items (out of scope here):**
- OB1 suggests a one-line website note tying "Business Outcomes" to "Outcomes & Measurement" when the page is next edited; this is live website copy, so it needs separate approval
- HANDOFF.md still has an outdated "To ship the redesign" paragraph in the Deployment section

### Session 5 - 2026-10-04 (Outcomes note and deploy docs)
**Goal:** Tie the website's "Business Outcomes" to the formal "Outcomes & Measurement" name, and clear the stale deploy documentation.

**What was done:**
- Shipped the approved one-line note under the six-stage diagram (PR #13, merged as `9e96711`): "Business Outcomes, formally Outcomes & Measurement in our reference architecture, is where results are measured and fed back so each use case can build on the last." It lives in the shared `SemanticToActionDiagram` component, so it shows on /capabilities and /semantic-to-action, and CONTENT-INVENTORY.md mirrors it in both places. Confirmed in the production HTML of both pages and checked at 390px
- Replaced the stale "To ship the redesign" and "To deploy a normal change" paragraphs in the HANDOFF.md Deployment section with a branch, pull request, Vercel check, merge, and delete-branch list
- Added a content guardrail that pricing is never published on the website
- Resolved both Session 4 open items (the website note and the outdated HANDOFF.md paragraph)

**Decisions made:**
- The Home teaser and the Government page were intentionally left unchanged. The Home teaser row is decorative and hidden from assistive technology, and the Government page has no six-stage chain
- "Mission Outcomes" does not appear anywhere on the live site, so there is no federal-variant line

**Open items:**
- Optional: point JOIN_US_NOTIFY_EMAIL at talent@xlsigma.com (see Pending)
- The Capabilities differentiator "Lower business overhead translates to lower prices for top talent and results" mentions prices in general terms and publishes no figures; decide whether it fits the new pricing guardrail

### Session 6 - 2026-10-04 (Addendum B)
**Goal:** Point the repo notes at V1 Addendum B (Context Services) in OB1.

**What was done:**
- Added Addendum B (title and OB1 ID) to the Semantic-to-Action™ canonical source bullet in CLAUDE.md and to the canonical-source paragraph in HANDOFF.md
- Looked up the Addendum B Thought ID in OB1 by title (read-only; a single match)

**Decisions made:**
- Addendum B is canonical. The component is named "Context Services" (never "Semantic-to-Action™ Context Services"). It is a runtime interface, not a seventh layer, so the six-layer architecture is unchanged
- Docs only: no website copy, CONTENT-INVENTORY.md, or app/ changes

---

## Pending / Future Work

- [ ] Optional: point JOIN_US_NOTIFY_EMAIL at talent@xlsigma.com (a distribution list; members andresslack@ and tjdmochowski@, external senders allowed). Redeploy and run a Careers test first; see HANDOFF.md
- [ ] Add more sessions to this log as work continues
