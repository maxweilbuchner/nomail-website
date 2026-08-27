// The single place the site's identity lives. BASE stays "" while the site
// serves from the domain root; a subpath deploy only needs these two changed.
export const SITE = "https://nomailapp.com";
export const BASE = "";

export const DOWNLOAD_ARM64 =
  "https://github.com/maxweilbuchner/nomail-releases/releases/latest/download/NoMail-arm64.dmg";
export const DOWNLOAD_X64 =
  "https://github.com/maxweilbuchner/nomail-releases/releases/latest/download/NoMail-x64.dmg";
export const ALL_RELEASES = "https://github.com/maxweilbuchner/nomail-releases/releases";
export const ISSUES_URL = "https://github.com/maxweilbuchner/nomail-releases/issues";

// From LSMinimumSystemVersion in the packaged app's Info.plist (Electron's floor).
export const MIN_MACOS = "macOS 12";

// Public contact address (referenced by imprint + support). Forwards to the
// maintainer inbox via Cloudflare Email Routing; privacy@ is the policy's own.
export const CONTACT_EMAIL = "hello@nomailapp.com";

// GitHub Sponsors. The listing is public, so the goal card at /card resolves;
// SPONSORS_CARD is the kill switch — flipping it back to false swaps the card
// for a plain link (the card frames GitHub's 404 page if /card ever vanishes).
export const SPONSORS_URL = "https://github.com/sponsors/maxweilbuchner";
export const SPONSORS_CARD = true;
