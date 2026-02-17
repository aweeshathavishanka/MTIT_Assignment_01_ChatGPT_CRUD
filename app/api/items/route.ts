import { NextResponse } from "next/server";
import { createItem, getAllItems } from "@/lib/repositories/item.repository";

export async function GET() {
  try {
    const items = await getAllItems();
    return NextResponse.json(items);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.description || body.price == null) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const item = await createItem(body);

    return NextResponse.json(item, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 },
    );
  }
}
