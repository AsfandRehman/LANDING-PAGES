import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: "Invalid secret" }, { status: 401 });
  }
  revalidateTag("terms"); // ✅ blows away the data cache used by getTerms()
  return NextResponse.json({ ok: true, revalidated: "terms" });
}
