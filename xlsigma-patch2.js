const fs = require("fs");

function patch(file, replacements) {
  let c = fs.readFileSync(file, "utf8");
  let hits = 0;
  for (const [find, rep] of replacements) {
    const before = c;
    c = c.replace(find, rep);
    if (c !== before) { hits++; console.log("  OK: " + file + " -> " + String(find).substring(0,60)); }
    else { console.log("  MISS: " + file + " -> " + String(find).substring(0,60)); }
  }
  if (hits > 0) fs.writeFileSync(file, c, "utf8");
}

patch("app/layout.tsx", [
  ["'SDVOSB and Minority-Owned Small Business.'",
   "'SDVOSB and Veteran-Owned Small Business.'"],
]);

patch("app/page.tsx", [
  ["'Senior practitioner on every engagement -- no juniors, no bench'",
   "'Senior-only delivery teams on every engagement -- no juniors, no bench'"],
  ["'Deep expertise across Accenture, IBM, GE, and Emerson'",
   "'Deep expertise across Accenture, GE, and Emerson'"],
  [/Accenture, IBM,\r?\n(\s*)GE, and Emerson\./,
   "Accenture, GE, and Emerson."],
  [/Every engagement is led personally -- not delegated\. You get the experience\r?\n\s*you hired, from kickoff to delivery\./,
   "You're never handed off to juniors. Every engagement is staffed with senior consultants and backed by direct principal oversight."],
  ["Experience across Accenture, IBM, GE, Emerson",
   "Experience across Accenture, GE, Emerson"],
  [/\s*<span className="bg-gold\/20 text-gold-light text-xs font-bold px-4 py-1\.5\r?\n\s*rounded-full border border-gold\/30 uppercase tracking-wider">\r?\n\s*Minority-Owned SB\r?\n\s*<\/span>/,
   ""],
  ["xlSigma is a certified SDVOSB and Minority-Owned Small Business -- helping",
   "xlSigma is a certified SDVOSB and Veteran-Owned Small Business -- helping"],
]);

patch("app/capabilities/page.tsx", [
  ["'Dual small-business credit: SDVOSB and Minority-Owned'",
   "'Dual set-aside credit: SDVOSB and Veteran-Owned'"],
  ["Eight integrated practice areas, delivered by a single senior practitioner",
   "Eight integrated practice areas, delivered by senior-only teams with principal oversight"],
]);

patch("app/components/Footer.tsx", [
  [/\s*<span className="bg-navy text-gold-light text-xs font-semibold px-3 py-1 rounded-full border border-gold\/30">\r?\n\s*Minority-Owned SB\r?\n\s*<\/span>/,
   ""],
]);

patch("app/contact/page.tsx", [
  [/\s*<li className="font-semibold text-navy">Minority-Owned SB<\/li>\r?\n\s*<li className="text-slate-500 text-xs mb-1">\r?\n\s*Minority-Owned Small Business\r?\n\s*<\/li>/,
   ""],
]);

patch("app/government-contracting/page.tsx", [
  ["'Satisfies SDVOSB and Minority-Owned small-business participation goals'",
   "'Satisfies SDVOSB and Veteran-Owned small-business participation goals'"],
  [/\s*<span className="bg-gold\/20 text-gold-light text-xs font-bold px-4 py-1\.5\r?\n\s*rounded-full border border-gold\/30 uppercase tracking-wider">\r?\n\s*Minority-Owned SB\r?\n\s*<\/span>/,
   ""],
  ["{ Icon: Award,  label: 'Minority-Owned',  sub: 'Minority-Owned Small Business'  }",
   "{ Icon: Award,  label: 'VBE (pending)',   sub: 'FL OSD Veteran CBE'              }"],
  ["Dual Certification -- One Subcontractor", "SDVOSB Certified"],
]);

console.log("\nDone.");
