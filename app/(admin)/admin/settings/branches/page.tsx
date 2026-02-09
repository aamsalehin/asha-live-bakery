"use client";

import { useEffect, useState } from "react";
import { Plus, Store } from "lucide-react";

interface Branch {
  id: string;
  name: string;
  phone: string;
  managerName: string;
  address: string;
  description?: string;
}

export default function BranchesPage() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    managerName: "",
    address: "",
    description: "",
  });

  // 🔁 Fetch branches
  const fetchBranches = async () => {
    const res = await fetch("/api/admin/branches", { cache: "no-store" });
    const data = await res.json();
    setBranches(data);
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  // ➕ Add branch
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/branches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({
        name: "",
        phone: "",
        managerName: "",
        address: "",
        description: "",
      });
      setOpen(false);
      fetchBranches();
    }

    setLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Branches</h1>

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
          Add Branch
        </button>
      </div>

      {/* ================= BRANCH LIST ================= */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {branches.map(branch => (
          <div
            key={branch.id}
            className="
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
              rounded-xl p-5 space-y-3
            "
          >
            <div className="flex items-center gap-2">
              <Store size={18} className="text-[var(--admin-accent)]" />
              <h2 className="text-xl font-semibold">{branch.name}</h2>
            </div>

            <p className="text-sm opacity-80">
              <strong>Manager:</strong> {branch.managerName}
            </p>

            <p className="text-sm opacity-80">
              <strong>Phone:</strong> {branch.phone}
            </p>

            <p className="text-sm opacity-80">
              <strong>Address:</strong> {branch.address}
            </p>

            {branch.description && (
              <p className="text-sm opacity-70">
                {branch.description}
              </p>
            )}
          </div>
        ))}
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
              Add New Branch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Branch Name"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />

              <input
                required
                placeholder="Contact Number"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />

              <input
                required
                placeholder="Branch Manager Name"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                value={form.managerName}
                onChange={e =>
                  setForm({ ...form, managerName: e.target.value })
                }
              />

              <textarea
                required
                placeholder="Address"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                rows={2}
                value={form.address}
                onChange={e =>
                  setForm({ ...form, address: e.target.value })
                }
              />

              <textarea
                placeholder="Description (optional)"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                rows={2}
                value={form.description}
                onChange={e =>
                  setForm({ ...form, description: e.target.value })
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
                  {loading ? "Saving..." : "Save Branch"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
