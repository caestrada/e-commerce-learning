import { getColorByIdSSR } from "@/lib/db/color.server";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: { colorId: string } }) {
  try {
    if (!params.colorId) {
      return new NextResponse("Color ID is required", { status: 400 });
    }

    const color = await getColorByIdSSR(params.colorId);
    return NextResponse.json(color);
  } catch (error) {
    console.log("[COLOR_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
