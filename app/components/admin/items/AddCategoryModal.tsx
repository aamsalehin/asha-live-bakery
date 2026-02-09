"use client";

import { useState } from "react";
import { Plus, FolderPlus } from "lucide-react";

export default function AddCategoryModal({ onSuccess }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName("");
    setLoading(false);
    setOpen(false);
    onSuccess?.();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center gap-2 px-4 py-2 rounded-lg
          bg-[var(--admin-button-bg)]
          text-[var(--admin-button-text)]
          hover:bg-[var(--admin-button-hover)]
        "
      >
        <FolderPlus size={18} />
        Add Category
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="
              w-full max-w-md rounded-xl p-6
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
            "
          >
            <h2 className="text-2xl font-semibold mb-4">
              Add Category
            </h2>

            <form onSubmit={submit} className="space-y-4">
              <input
                required
                placeholder="Category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
              />

              <div className="flex justify-end gap-3 pt-2">
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
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
