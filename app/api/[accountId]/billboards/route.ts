import { getBillboardsByAccountIdSSR } from "@/lib/db/billboard.server";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { accountId: string } }) {
  try {
    if (!params.accountId) {
      return new NextResponse("Account id is required", { status: 400 });
    }

    const billboards = await getBillboardsByAccountIdSSR(params.accountId);
    // return NextResponse.json(billboards);
    const response = NextResponse.json(billboards);

    // Set CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*"); // Replace with your client's origin
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
