import { ObjectId } from "mongodb";
import { connectDB } from "../mongodb";
import { Item, CreateItemDTO, UpdateItemDTO } from "@/types/item";

const COLLECTION = "items";

export async function createItem(data: CreateItemDTO): Promise<Item> {
  const db = await connectDB();

  const now = new Date();

  const result = await db.collection<Item>(COLLECTION).insertOne({
    ...data,
    createdAt: now,
    updatedAt: now,
  } as Item);

  const item = await db
    .collection<Item>(COLLECTION)
    .findOne({ _id: result.insertedId });

  if (!item) throw new Error("Failed to create item");

  return item;
}

export async function getAllItems(): Promise<Item[]> {
  const db = await connectDB();

  return db
    .collection<Item>(COLLECTION)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
}

export async function getItemById(id: string): Promise<Item | null> {
  const db = await connectDB();

  return db.collection<Item>(COLLECTION).findOne({
    _id: new ObjectId(id),
  });
}

export async function updateItem(
  id: string,
  data: UpdateItemDTO,
): Promise<boolean> {
  const db = await connectDB();

  const result = await db.collection<Item>(COLLECTION).updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        ...data,
        updatedAt: new Date(),
      },
    },
  );

  return result.modifiedCount > 0;
}

export async function deleteItem(id: string): Promise<boolean> {
  const db = await connectDB();

  const result = await db.collection<Item>(COLLECTION).deleteOne({
    _id: new ObjectId(id),
  });

  return result.deletedCount > 0;
}
