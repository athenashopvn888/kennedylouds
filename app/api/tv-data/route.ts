import { NextResponse } from "next/server";
import { applyTvItemPayload, getCigaretteSnapshot, snapshotHeaders } from "../../lib/cigaretteFeed";
import { allFlowers, allItems } from "../../lib/products";
import { getTvData } from "../../lib/tvStock";

export const runtime = "nodejs";

// Always run the handler. Stock reads are cached for ~300s and the cigarette
// flag for ~60s. This response itself is not cached (Cache-Control: no-store).
export const revalidate = 0;

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type") || "flowers";
  const snap = await getCigaretteSnapshot();
  const { body, headers } = await getTvData({
    type,
    staticFlowers: allFlowers,
    staticItems: allItems,
  });

  let payload = body;
  if (type === "items" && Array.isArray(body)) {
    payload = applyTvItemPayload(body, snap);
    headers["x-tv-data-item-count"] = String(payload.length);
  }

  return NextResponse.json(payload, { headers: { ...headers, ...snapshotHeaders(snap) } });
}
