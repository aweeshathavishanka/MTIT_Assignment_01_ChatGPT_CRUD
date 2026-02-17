import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

if (!uri) throw new Error("Missing MONGODB_URI");
if (!dbName) throw new Error("Missing MONGODB_DB");

interface Cached {
  client: MongoClient | null;
  db: Db | null;
}

declare global {
  var mongodb: Cached | undefined;
}

const cached: Cached = global.mongodb || { client: null, db: null };

export async function connectDB(): Promise<Db> {
  if (cached.db) return cached.db;

  const client = new MongoClient(uri);

  await client.connect();

  const db = client.db(dbName);

  cached.client = client;
  cached.db = db;

  if (process.env.NODE_ENV !== "production") {
    global.mongodb = cached;
  }

  return db;
}
