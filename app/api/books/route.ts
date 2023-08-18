import { getBooks } from "@/lib/db/book.server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const books = await getBooks();
    const response = NextResponse.json(books);

    // Set CORS headers
    response.headers.set("Access-Control-Allow-Origin", "http://localhost:*"); // Replace with your client's origin
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.log("[BOOKS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
