import { getSizesByAccountIdSSR } from "@/lib/db/size.server";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { accountId: string } }) {
  try {
    if (!params.accountId) {
      return new NextResponse("Account id is required", { status: 400 });
    }

    const sizes = await getSizesByAccountIdSSR(params.accountId);
    return NextResponse.json(sizes);
  } catch (error) {
    console.log("[SIZES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
