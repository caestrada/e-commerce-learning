import { getSizeByIdSSR } from "@/lib/db/size.server";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: { sizeId: string } }) {
  try {
    if (!params.sizeId) {
      return new NextResponse("Size ID is required", { status: 400 });
    }

    const size = await getSizeByIdSSR(params.sizeId);
    return NextResponse.json(size);
  } catch (error) {
    console.log("[SIZE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
