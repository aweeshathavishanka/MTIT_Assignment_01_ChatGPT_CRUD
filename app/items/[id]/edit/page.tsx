export const dynamic = "force-dynamic";

import ItemForm from "@/components/ItemForm";
import { getItemById } from "@/lib/repositories/item.repository";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function EditPage({ params }: Props) {
  let item = null;
  try {
    item = await getItemById(params.id);
  } catch (err) {
    // Log the error and render a friendly message if DB is unreachable.
    // eslint-disable-next-line no-console
    console.error("Failed to load item from DB:", err);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-2">Edit Item</h1>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <p className="text-sm text-red-600">
            Unable to load item data. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  if (!item) return <div>Not found</div>;

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Edit Item</h1>
            <p className="text-sm text-gray-600 mt-1">
              Update the details for this item.
            </p>
          </div>

          <div>
            <Link
              href="/items"
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2 font-medium transition duration-200">
              Back to items
            </Link>
          </div>
        </div>

        <ItemForm
          itemId={item._id.toString()}
          initialData={{
            title: item.title,
            description: item.description,
            price: item.price,
          }}
        />
      </div>
    </div>
  );
}
