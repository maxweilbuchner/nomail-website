/** Prefix an internal path with the deploy base. The base is empty while the
 *  site serves from the domain root; every internal href still goes through
 *  this so a subpath deploy stays a one-constant change. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
