// The single place the site's identity lives. When a custom domain lands,
// change SITE and set BASE to "" — nothing else moves.
export const SITE = "https://maxweilbuchner.github.io";
export const BASE = "/nomail-website";

export const DOWNLOAD_ARM64 =
  "https://github.com/maxweilbuchner/nomail-releases/releases/latest/download/NoMail-arm64.dmg";
export const DOWNLOAD_X64 =
  "https://github.com/maxweilbuchner/nomail-releases/releases/latest/download/NoMail-x64.dmg";
export const ALL_RELEASES = "https://github.com/maxweilbuchner/nomail-releases/releases";
export const ISSUES_URL = "https://github.com/maxweilbuchner/nomail-releases/issues";

// From LSMinimumSystemVersion in the packaged app's Info.plist (Electron's floor).
export const MIN_MACOS = "macOS 12";

// TODO(Max): real public contact address (also referenced by imprint + support).
export const CONTACT_EMAIL = "[[CONTACT EMAIL]]";
