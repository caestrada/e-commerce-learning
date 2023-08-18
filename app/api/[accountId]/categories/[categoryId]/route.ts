import { NextResponse } from "next/server";

import { getCategoryByIdSSR } from "@/lib/db/category.server";

export async function GET(_req: Request, { params }: { params: { categoryId: string } }) {
  try {
    if (!params.categoryId) {
      return new NextResponse("Category ID is required", { status: 400 });
    }

    const category = await getCategoryByIdSSR(params.categoryId);
    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
