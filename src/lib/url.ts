/** Prefix an internal path with the deploy base (GitHub Pages subpath).
 *  Every internal href on the site goes through this — bare "/…" links
 *  break the moment the site serves from /nomail-website/. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
