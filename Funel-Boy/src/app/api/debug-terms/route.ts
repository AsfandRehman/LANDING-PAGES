export async function GET() {
  const url = process.env.SHEET_GVIZ_URL!;
  const res = await fetch(url, { cache: "no-store" }); // always fresh
  const txt = await res.text();
  // Return just a small slice so the body isn't huge
  return new Response(txt.slice(0, 400), { status: res.ok ? 200 : res.status });
}
