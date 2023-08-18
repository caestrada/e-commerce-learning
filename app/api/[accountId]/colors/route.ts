import { getColorsByAccountIdSSR } from "@/lib/db/color.server";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { accountId: string } }) {
  try {
    if (!params.accountId) {
      return new NextResponse("Account id is required", { status: 400 });
    }

    const colors = await getColorsByAccountIdSSR(params.accountId);
    return NextResponse.json(colors);
  } catch (error) {
    console.log("[COLORS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
