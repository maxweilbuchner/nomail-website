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
