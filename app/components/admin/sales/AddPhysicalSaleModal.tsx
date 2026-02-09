"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

type Branch = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  unit: string;
};

type Props = {
  branches: Branch[];
  products: Product[];
  onSuccess?: () => void;
};

export default function AddPhysicalSaleModal({
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
    { productId: string; quantity: string; unitPrice: string }[]
  >([{ productId: "", quantity: "", unitPrice: "" }]);

  const addRow = () =>
    setItems([...items, { productId: "", quantity: "", unitPrice: "" }]);

  const removeRow = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/admin/sales/physical", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        branchId: Number(branchId),
        items: items.map((i) => ({
          productId: Number(i.productId),
          quantity: Number(i.quantity),
          unitPrice: Number(i.unitPrice),
        })),
      }),
    });

    setLoading(false);
    setOpen(false);
    onSuccess?.();
  };

  return (
    <>
      {/* ADD BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center gap-2 px-4 py-2 rounded-lg
          bg-[var(--admin-button-bg)]
          text-[var(--admin-button-text)]
          hover:bg-[var(--admin-button-hover)]
        "
      >
        <Plus size={16} />
        Add Sale
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="
              w-full max-w-4xl rounded-xl p-6
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
            "
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Add Physical Sale
              </h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <form onSubmit={submit} className="space-y-5">
              {/* DATE + BRANCH */}
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

              {/* ITEMS */}
              <div className="space-y-3">
                {items.map((row, index) => {
                  const product = products.find(
                    (p) => p.id === Number(row.productId)
                  );

                  const total =
                    Number(row.quantity || 0) *
                    Number(row.unitPrice || 0);

                  return (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-3 items-center"
                    >
                      {/* PRODUCT */}
                      <select
                        required
                        className="input col-span-5"
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

                      {/* QUANTITY */}
                      <input
                        required
                        type="number"
                        placeholder={`Qty (${product?.unit || ""})`}
                        className="input col-span-2"
                        value={row.quantity}
                        onChange={(e) => {
                          const clone = [...items];
                          clone[index].quantity = e.target.value;
                          setItems(clone);
                        }}
                      />

                      {/* UNIT PRICE */}
                      <input
                        required
                        type="number"
                        placeholder="Unit price"
                        className="input col-span-2"
                        value={row.unitPrice}
                        onChange={(e) => {
                          const clone = [...items];
                          clone[index].unitPrice = e.target.value;
                          setItems(clone);
                        }}
                      />

                      {/* TOTAL */}
                      <div className="col-span-2 text-sm font-medium">
                        ৳ {total.toFixed(2)}
                      </div>

                      {/* REMOVE */}
                      <button
                        type="button"
                        onClick={() => removeRow(index)}
                        className="
                          col-span-1 text-[var(--admin-danger)]
                          hover:opacity-70
                        "
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* ADD ROW */}
              <button
                type="button"
                onClick={addRow}
                className="text-sm text-[var(--admin-accent)]"
              >
                + Add another item
              </button>

              {/* ACTIONS */}
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
                  className="
                    px-4 py-2 rounded-lg
                    bg-[var(--admin-button-bg)]
                    text-[var(--admin-button-text)]
                  "
                >
                  {loading ? "Saving..." : "Save Sale"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
