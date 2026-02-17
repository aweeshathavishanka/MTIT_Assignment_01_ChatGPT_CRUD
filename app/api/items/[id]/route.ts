import { NextResponse } from "next/server";
import {
  getItemById,
  updateItem,
  deleteItem,
} from "@/lib/repositories/item.repository";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const item = await getItemById(params.id);

  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(item);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();

  const success = await updateItem(params.id, body);

  if (!success)
    return NextResponse.json({ error: "Update failed" }, { status: 400 });

  return NextResponse.json({ success: true });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const success = await deleteItem(params.id);

  if (!success)
    return NextResponse.json({ error: "Delete failed" }, { status: 400 });

  return NextResponse.json({ success: true });
}
