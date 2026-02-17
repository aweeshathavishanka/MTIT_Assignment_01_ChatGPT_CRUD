export const dynamic = "force-dynamic";

import { getAllItems } from "@/lib/repositories/item.repository";
import ItemCard from "@/components/ItemCard";
import Link from "next/link";

export default async function ItemsPage() {
  let serverItems = [];
  try {
    serverItems = await getAllItems();
  } catch (err) {
    // Log the error and fall back to empty list to avoid build/runtime crashes
    // during environments where the DB is unreachable (build agents, CI).
    // The page is forced to runtime rendering via `dynamic = 'force-dynamic'`.
    // eslint-disable-next-line no-console
    console.error("Failed to load items from DB:", err);
    serverItems = [];
  }

  const items = serverItems.map((item) => ({
    _id: item._id.toString(),
    title: item.title,
    description: item.description,
    price: item.price,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Items</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your items — create, edit, or remove entries.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/items/create"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-medium transition duration-200">
            Create Item
          </Link>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="mt-12">
          <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl  p-8 text-center">
            <div className="text-4xl mb-4">📦</div>
            <h2 className="text-xl font-semibold">No items yet</h2>
            <p className="text-sm text-gray-600 mt-2">
              You don&apos;t have any items. Create your first item to get
              started.
            </p>
            <div className="mt-6">
              <Link
                href="/items/create"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-medium transition duration-200">
                Create Item
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
