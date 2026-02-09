"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const UNITS = ["kg", "gm", "pcs", "litre"];

export default function AddRawMaterialModal({ onSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    quantity: "",
    unit: "kg",
    price: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/admin/raw-materials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setOpen(false);
    onSuccess?.();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg
        bg-[var(--admin-button-bg)]
        text-[var(--admin-button-text)]
        hover:bg-[var(--admin-button-hover)]"
      >
        <Plus size={16} />
        Add Raw Material
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="w-full max-w-xl rounded-xl p-6
            bg-[var(--admin-card-bg)]
            border border-[var(--admin-card-border)]">

            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Add Raw Material</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="Material name"
                className="input"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                required
                placeholder="Brand name"
                className="input"
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
              />

              <input
                required
                type="number"
                placeholder="Quantity"
                className="input"
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              />

              <select
                className="input"
                onChange={(e) => setForm({ ...form, unit: e.target.value })}
              >
                {UNITS.map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Price per unit (optional)"
                className="input col-span-2"
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

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
                  className="px-4 py-2 rounded-lg
                  bg-[var(--admin-button-bg)]
                  text-[var(--admin-button-text)]"
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
