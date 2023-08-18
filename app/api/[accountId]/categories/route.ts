import { getCategoriesByAccountIdAPI } from "@/lib/db/category.server";

import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: { accountId: string } }) {
  try {
    if (!params.accountId) {
      return new NextResponse("Account id is required", { status: 400 });
    }

    const categories = await getCategoriesByAccountIdAPI(params.accountId);
    const response = NextResponse.json(categories);

    // Set CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*"); // Replace with your client's origin
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.log("[CATEGORIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
