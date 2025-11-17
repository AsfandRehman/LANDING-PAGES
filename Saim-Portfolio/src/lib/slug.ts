export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")       // strip accents
    .replace(/[^a-z0-9]+/g, "-")           // non-alphanum → -
    .replace(/(^-|-$)+/g, "")              // trim -
    .replace(/-{2,}/g, "-");               // collapse --
}
