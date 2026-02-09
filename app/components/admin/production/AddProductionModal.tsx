"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface Branch {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  unit: string;
}

interface Props {
  branches: Branch[];
  products: Product[];
  onSuccess?: () => void;
}

export default function AddProductionModal({
  branches,
  products,
  onSuccess,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [branchId, setBranchId] = useState("");
  const [items, setItems] = useState<
    { productId: string; quantity: string }[]
  >([{ productId: "", quantity: "" }]);

  const addRow = () =>
    setItems([...items, { productId: "", quantity: "" }]);

  const removeRow = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/admin/production", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        branchId: Number(branchId),
        items: items.map((i) => ({
          productId: Number(i.productId),
          quantity: Number(i.quantity),
        })),
      }),
    });

    setLoading(false);
    setOpen(false);
    onSuccess?.();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--admin-button-bg)] text-[var(--admin-button-text)]"
      >
        <Plus size={16} />
        Add Production
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-3xl rounded-xl p-6 bg-[var(--admin-card-bg)] border border-[var(--admin-card-border)]">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold">
                Add Daily Production
              </h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input"
                />

                <select
                  required
                  value={branchId}
                  onChange={(e) => setBranchId(e.target.value)}
                  className="input"
                >
                  <option value="">Select Branch</option>
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              {items.map((row, index) => {
                const product = products.find(
                  (p) => p.id === Number(row.productId)
                );

                return (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-3"
                  >
                    <select
                      required
                      className="input col-span-6"
                      value={row.productId}
                      onChange={(e) => {
                        const clone = [...items];
                        clone[index].productId = e.target.value;
                        setItems(clone);
                      }}
                    >
                      <option value="">Select Product</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>

                    <input
                      required
                      type="number"
                      placeholder={`Qty (${product?.unit || ""})`}
                      className="input col-span-4"
                      value={row.quantity}
                      onChange={(e) => {
                        const clone = [...items];
                        clone[index].quantity = e.target.value;
                        setItems(clone);
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => removeRow(index)}
                      className="col-span-2 text-[var(--admin-danger)]"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={addRow}
                className="text-sm text-[var(--admin-accent)]"
              >
                + Add another product
              </button>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-[var(--admin-button-bg)] text-[var(--admin-button-text)]"
                >
                  {loading ? "Saving..." : "Save Production"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
