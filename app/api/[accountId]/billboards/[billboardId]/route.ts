import { getBillboardByIdAPI, getBillboardByIdSSR } from "@/lib/db/billboard.server";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: { billboardId: string } }) {
  try {
    if (!params.billboardId) {
      return new NextResponse("Billboard ID is required", { status: 400 });
    }

    const billboard = await getBillboardByIdAPI(params.billboardId);
    // return NextResponse.json(billboard);
    // return NextResponse.json(billboards);
    const response = NextResponse.json(billboard);

    // Set CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*"); // Replace with your client's origin
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.log("[BILLBOARD_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
