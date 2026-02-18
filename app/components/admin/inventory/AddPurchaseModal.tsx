"use client";

import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";

export default function AddPurchaseModal({ onSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [branches, setBranches] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [materials, setMaterials] = useState([]);

  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    branchId: "",
    supplierId: "",
    invoiceNumber: "",
    notes: "",
  });

  const [items, setItems] = useState([
    { rawMaterialId: "", quantity: "", unitPrice: "", unit: "kg" },
  ]);

  /* =========================
     FETCH DROPDOWN DATA
  ========================= */
  useEffect(() => {
    if (!open) return;

    Promise.all([
      fetch("/api/admin/branches").then(r => r.json()),
      fetch("/api/admin/suppliers").then(r => r.json()),
      fetch("/api/admin/raw-materials").then(r => r.json()),
    ])
      .then(([b, s, m]) => {
        setBranches(b || []);
        setSuppliers(s || []);
        setMaterials(m || []);
      })
      .catch(err => {
        console.error("PURCHASE MODAL FETCH ERROR:", err);
      });
  }, [open]);

  /* =========================
     ITEM ROW HELPERS
  ========================= */
  const addRow = () =>
    setItems([...items, { rawMaterialId: "", quantity: "", unitPrice: "", unit: "kg" }]);

  const removeRow = (index) =>
    setItems(items.filter((_, i) => i !== index));

  /* =========================
     SUBMIT
  ========================= */
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      branchId: Number(form.branchId),
      supplierId: Number(form.supplierId),
      items: items.map(i => ({
        rawMaterialId: Number(i.rawMaterialId),
        quantity: Number(i.quantity),
        unit: i.unit,
        unitPrice: Number(i.unitPrice),
      })),
    };

    await fetch("/api/admin/purchases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    setOpen(false);
    onSuccess?.();
  };

  return (
    <>
      {/* OPEN BUTTON */}
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
        Add Purchase
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div
            className="
              w-full max-w-4xl rounded-xl p-6
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">New Purchase</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <form onSubmit={submit} className="space-y-6">
              {/* PURCHASE INFO */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="input"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                />

                <select
                  required
                  className="input"
                  value={form.branchId}
                  onChange={e => setForm({ ...form, branchId: e.target.value })}
                >
                  <option value="">Select Branch</option>
                  {branches.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>

                <select
                  required
                  className="input col-span-2"
                  value={form.supplierId}
                  onChange={e => setForm({ ...form, supplierId: e.target.value })}
                >
                  <option value="">Select Supplier</option>
                  {suppliers.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>

                <input
                  placeholder="Invoice number (optional)"
                  className="input col-span-2"
                  value={form.invoiceNumber}
                  onChange={e => setForm({ ...form, invoiceNumber: e.target.value })}
                />
              </div>

              {/* ITEMS */}
              <div className="space-y-3">
                {items.map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-3 items-center">
                    <select
                      className="input col-span-5"
                      required
                      value={row.rawMaterialId}
                      onChange={e => {
                        const copy = [...items];
                        copy[i].rawMaterialId = e.target.value;
                        setItems(copy);
                      }}
                    >
                      <option value="">Raw Material</option>
                      {materials.map(m => (
                        <option key={m.id} value={m.id}>{m.name}</option>
                      ))}
                    </select>

                    <input
                      type="number"
                      placeholder="Qty"
                      className="input col-span-2"
                      value={row.quantity}
                      onChange={e => {
                        const copy = [...items];
                        copy[i].quantity = e.target.value;
                        setItems(copy);
                      }}
                    />

                    <select
                      className="input col-span-2"
                      value={row.unit}
                      onChange={e => {
                        const copy = [...items];
                        copy[i].unit = e.target.value;
                        setItems(copy);
                      }}
                    >
                      <option value="kg">kg</option>
                      <option value="gm">gm</option>
                      <option value="ltr">ltr</option>
                      <option value="pcs">pcs</option>
                    </select>

                    <input
                      type="number"
                      placeholder="Unit price"
                      className="input col-span-2"
                      value={row.unitPrice}
                      onChange={e => {
                        const copy = [...items];
                        copy[i].unitPrice = e.target.value;
                        setItems(copy);
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => removeRow(i)}
                      className="col-span-1 text-[var(--admin-danger)]"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addRow}
                className="text-sm text-[var(--admin-accent)]"
              >
                + Add item
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
                  {loading ? "Saving..." : "Save Purchase"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
