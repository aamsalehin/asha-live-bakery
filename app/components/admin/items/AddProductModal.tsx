"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
  onSuccess?: () => void;
}

export default function AddProductModal({ categories, onSuccess }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    unit: "pcs",
    image: "",
    description: "",
    ingredients: "",
    categoryId: "",
  });

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      unit: "pcs",
      image: "",
      description: "",
      ingredients: "",
      categoryId: "",
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.categoryId) return;

    setLoading(true);

    await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        price: Number(form.price),
        unit: form.unit,
        image: form.image || null,
        description: form.description || null,
        ingredients: form.ingredients
          ? form.ingredients.split(",").map(i => i.trim())
          : [],
        categoryId: Number(form.categoryId), // ✅ FIX
      }),
    });

    setLoading(false);
    setOpen(false);
    resetForm();
    onSuccess?.();
  };

  return (
    <>
      {/* ================= ADD BUTTON ================= */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center gap-2 px-4 py-2 rounded-lg
          bg-[var(--admin-button-bg)]
          text-[var(--admin-button-text)]
          hover:bg-[var(--admin-button-hover)]
          transition
        "
      >
        <Plus size={16} />
        Add Item
      </button>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="
              w-full max-w-2xl rounded-xl p-6
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  Add New Item
                </h2>
                <p className="text-sm opacity-70">
                  Enter product details
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-[var(--admin-soft-bg)]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              {/* Name */}
              <input
                required
                placeholder="Product name"
                className="input"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              {/* Price */}
              <input
                required
                type="number"
                placeholder="Price"
                className="input"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />

              {/* Category */}
              <select
                required
                className="input col-span-2"
                value={form.categoryId}
                onChange={(e) =>
                  setForm({ ...form, categoryId: e.target.value })
                }
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

              {/* Image */}
              <input
                placeholder="Image URL (optional)"
                className="input col-span-2"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

              {/* Description */}
              <textarea
                placeholder="Short description"
                className="input col-span-2"
                rows={2}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              {/* Ingredients */}
              <textarea
                placeholder="Ingredients (comma separated)"
                className="input col-span-2"
                rows={2}
                value={form.ingredients}
                onChange={(e) =>
                  setForm({ ...form, ingredients: e.target.value })
                }
              />

              {/* Actions */}
              <div className="col-span-2 flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
                  disabled={loading}
                  className="
                    px-4 py-2 rounded-lg
                    bg-[var(--admin-button-bg)]
                    text-[var(--admin-button-text)]
                    hover:bg-[var(--admin-button-hover)]
                  "
                >
                  {loading ? "Saving..." : "Save Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
