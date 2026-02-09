"use client";

import { useEffect, useState } from "react";
import { Plus, Truck, Trash2 } from "lucide-react";

interface Supplier {
  id: number;
  name: string;
  phone: string;
  address: string;
}

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // 🔁 Fetch suppliers
  const fetchSuppliers = async () => {
    const res = await fetch("/api/admin/suppliers", { cache: "no-store" });
    const data = await res.json();
    setSuppliers(data);
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  // ➕ Add supplier
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/suppliers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", phone: "", address: "" });
      setOpen(false);
      fetchSuppliers();
    }

    setLoading(false);
  };

  // 🗑 Delete supplier
  const remove = async (id: number) => {
    if (!confirm("Delete this supplier?")) return;

    await fetch("/api/admin/suppliers", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchSuppliers();
  };

  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Suppliers</h1>

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
          <Plus size={18} />
          Add Supplier
        </button>
      </div>

      {/* ================= SUPPLIER LIST ================= */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {suppliers.map((s) => (
          <div
            key={s.id}
            className="
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
              rounded-xl p-5
              flex items-start justify-between
            "
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Truck
                  size={18}
                  className="text-[var(--admin-accent)]"
                />
                <h2 className="font-semibold text-lg">
                  {s.name}
                </h2>
              </div>

              <p className="text-sm opacity-80">
                📞 {s.phone}
              </p>

              <p className="text-sm opacity-70">
                📍 {s.address}
              </p>
            </div>

            <button
              onClick={() => remove(s.id)}
              className="
                p-2 rounded-lg
                text-[var(--admin-danger)]
                hover:bg-[var(--admin-soft-bg)]
              "
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

        {suppliers.length === 0 && (
          <div className="opacity-60">
            No suppliers found
          </div>
        )}
      </div>

      {/* ================= ADD MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="
              w-full max-w-lg rounded-xl p-6
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
            "
          >
            <h2 className="text-2xl font-semibold mb-4">
              Add Supplier
            </h2>

            <form onSubmit={submit} className="space-y-4">
              <input
                required
                placeholder="Supplier Name"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                required
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <textarea
                required
                placeholder="Address"
                rows={2}
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
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
                  type="submit"
                  disabled={loading}
                  className="
                    px-4 py-2 rounded-lg
                    bg-[var(--admin-button-bg)]
                    text-[var(--admin-button-text)]
                    hover:bg-[var(--admin-button-hover)]
                  "
                >
                  {loading ? "Saving..." : "Save Supplier"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
