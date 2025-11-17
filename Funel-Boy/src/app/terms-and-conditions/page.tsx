// src/app/terms-and-conditions/page.tsx
import Link from "next/link";

const ACCENT = "#FFEB3B";
export const revalidate = 600;

type Row = { status: string; order: string | number; title: string; body: string };
type GvizCell = { v?: string | number | boolean | null } | null;
type GvizRow = { c: GvizCell[] };
type GvizCol = { label?: string | null };
type GvizTable = { cols: GvizCol[]; rows: GvizRow[] };
type GvizResponse = { table: GvizTable };

function parseGviz(text: string): Row[] {
  const json = JSON.parse(
    text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)
  ) as GvizResponse;

  const cols: string[] = json.table.cols.map((c) => (c.label ?? "").toLowerCase());
  const idx = (name: string) => cols.indexOf(name);

  return json.table.rows
    .map((r): Row => {
      const c = r.c ?? [];
      const val = (i: number) => {
        const cell = c[i];
        const v = cell && "v" in (cell ?? {}) ? cell?.v : "";
        return v == null ? "" : String(v);
      };
      return {
        status: val(idx("status")),
        order: val(idx("order")),
        title: val(idx("title")),
        body: val(idx("body")),
      };
    })
    .filter((r) => (r.status || "").toLowerCase() === "published")
    .sort((a, b) => Number(a.order) - Number(b.order));
}
// ❌ Do NOT import NextResponse here
// Just fetch data and return JSX

async function getTerms(): Promise<Row[]> {
  const url = process.env.SHEET_GVIZ_URL!;
  if (!url) throw new Error("SHEET_GVIZ_URL is missing in env");

  const res = await fetch(url, { next: { revalidate, tags: ["terms"] } });
  const txt = await res.text();

  if (!res.ok) {
    throw new Error(`Sheet fetch failed ${res.status}: ${txt.slice(0, 200)}`);
  }

  return parseGviz(txt);
}


export default async function TermsPage() {
  const sections = await getTerms();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-white pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="absolute left-1/2 top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,235,59,0.15),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
          Terms & <span style={{ color: ACCENT }}>Conditions</span>
        </h1>

        <div className="space-y-8 text-sm leading-7 text-white/80">
          {sections.length === 0 ? (
            <p className="text-center text-white/60">Terms are currently unavailable.</p>
          ) : (
            sections.map((s) => (
              <section key={s.order}>
                <h2 className="mb-2 text-lg font-semibold text-white">
                  {s.order}. {s.title}
                </h2>
                <p className="whitespace-pre-line">{s.body}</p>
              </section>
            ))
          )}
        </div>

        <div className="mt-12 text-center text-xs text-white/60">
          <Link href="/privacy" className="text-white hover:text-[--accent]">
            View Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}
