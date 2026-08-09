// Vendored from nomail scripts/lib/changelog.mjs — keep in sync.

/**
 * Removes parenthesized issue refs — `(#12)`, `(#228, #230)` — and the space
 * before them. CHANGELOG.md keeps the refs as history; the surfaces users see
 * must not: the tracker is private, and in the public releases repo GitHub
 * would auto-link `#NN` to the wrong repo's issues. Bare `#12` (no parens)
 * is prose, not a ref, and stays.
 */
export function stripIssueRefs(md) {
  return md.replace(/\s*\(#\d+(?:,\s*#\d+)*\)/g, "");
}
