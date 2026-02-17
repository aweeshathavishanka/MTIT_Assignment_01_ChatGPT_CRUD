"use client";

import { ItemClient } from "@/types/item";
import { useRouter } from "next/navigation";

interface Props {
  item: ItemClient;
}

export default function ItemCard({ item }: Props) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Delete this item?")) return;

    await fetch(`/api/items/${item._id}`, {
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <article className="bg-white border border-gray-200 rounded-xl  transition duration-200 p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <div className="text-sm font-medium text-gray-800">${item.price}</div>
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-3">
          {item.description}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => router.push(`/items/${item._id}/edit`)}
          className="rounded-lg px-4 py-2 font-medium transition duration-200 bg-gray-100 hover:bg-gray-200 text-gray-800">
          Edit
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="rounded-lg px-4 py-2 font-medium transition duration-200 bg-red-500 hover:bg-red-600 text-white">
          Delete
        </button>
      </div>
    </article>
  );
}
