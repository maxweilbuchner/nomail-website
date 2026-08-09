import { stripIssueRefs } from "./changelog.mjs";

export interface VersionSection {
  version: string;
  date: string; // YYYY-MM-DD
  html: string;
}

const escapeHtml = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// The changelog's documented inline surface is **bold** and `code` only
// (see the CHANGELOG.md preamble) — escaping first keeps this XSS-safe by
// construction.
const renderInline = (escaped: string): string =>
  escaped
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");

/**
 * Renders one version section's body: `### Added/Changed/Fixed` subheads
 * (older releases), `- ` bullets with indented continuation lines, and the
 * constrained inline markup. Anything else falls through as a paragraph.
 */
function renderBody(body: string): string {
  const out: string[] = [];
  let listOpen = false;
  let bullet: string[] | null = null;

  const closeList = () => {
    if (listOpen) {
      out.push("</ul>");
      listOpen = false;
    }
  };
  const flushBullet = () => {
    if (bullet) {
      if (!listOpen) {
        out.push("<ul>");
        listOpen = true;
      }
      const text = bullet.join(" ").replace(/\s+/g, " ").trim();
      out.push(`<li>${renderInline(escapeHtml(text))}</li>`);
      bullet = null;
    }
  };

  for (const line of body.split("\n")) {
    if (/^### /.test(line)) {
      flushBullet();
      closeList();
      out.push(`<h3>${renderInline(escapeHtml(line.slice(4).trim()))}</h3>`);
    } else if (/^- /.test(line)) {
      flushBullet();
      bullet = [line.slice(2)];
    } else if (bullet && /^\s+\S/.test(line)) {
      bullet.push(line.trim());
    } else if (line.trim() === "") {
      flushBullet();
    } else {
      flushBullet();
      closeList();
      out.push(`<p>${renderInline(escapeHtml(line.trim()))}</p>`);
    }
  }
  flushBullet();
  closeList();
  return out.join("\n");
}

/**
 * Parses the vendored CHANGELOG.md into rendered version sections, newest
 * first. Drops the preamble and the `## Unreleased` section (anything whose
 * heading isn't `X.Y.Z — YYYY-MM-DD`), and strips private-tracker issue refs.
 */
export function parseChangelog(raw: string): VersionSection[] {
  const sections: VersionSection[] = [];
  for (const chunk of stripIssueRefs(raw).split(/^(?=## )/m)) {
    if (!chunk.startsWith("## ")) continue;
    const nl = chunk.indexOf("\n");
    const heading = (nl === -1 ? chunk.slice(3) : chunk.slice(3, nl)).trim();
    const match = /^(\d+\.\d+\.\d+) — (\d{4}-\d{2}-\d{2})$/.exec(heading);
    if (!match) continue;
    const body = nl === -1 ? "" : chunk.slice(nl + 1);
    sections.push({ version: match[1], date: match[2], html: renderBody(body) });
  }
  return sections;
}
