"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

type Branch = {
  id: number;
  name: string;
};

type Props = {
  branches: Branch[];
  onSuccess?: () => void;
};

export default function AddEmployeeModal({
  branches,
  onSuccess,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    salary: "",
    branchId: "",
    image: "",
    education: "",
    notes: "",

    // bank
    bankName: "",
    branchName: "",
    accountName: "",
    accountNumber: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/admin/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        salary: Number(form.salary),
        branchId: Number(form.branchId),
      }),
    });

    setLoading(false);
    setOpen(false);
    onSuccess?.();
  };

  return (
    <>
      {/* Button */}
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
        Add Employee
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="
              w-full max-w-3xl rounded-xl p-6
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Add Employee</h2>
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={submit} className="space-y-6">
              {/* BASIC INFO */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Full name"
                  className="input"
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="Phone"
                  className="input"
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

                <input
                  placeholder="Email (optional)"
                  className="input"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <input
                  required
                  type="number"
                  placeholder="Salary"
                  className="input"
                  onChange={(e) =>
                    setForm({ ...form, salary: e.target.value })
                  }
                />

                <select
                  required
                  className="input col-span-2"
                  onChange={(e) =>
                    setForm({ ...form, branchId: e.target.value })
                  }
                >
                  <option value="">Select Branch</option>
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>

                <input
                  placeholder="Image URL"
                  className="input col-span-2"
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.value })
                  }
                />

                <textarea
                  required
                  placeholder="Address"
                  className="input col-span-2"
                  rows={2}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </div>

              {/* BANK DETAILS */}
              <div>
                <p className="text-sm font-semibold mb-2 opacity-80">
                  Bank Details (optional)
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="Bank name"
                    className="input"
                    onChange={(e) =>
                      setForm({ ...form, bankName: e.target.value })
                    }
                  />
                  <input
                    placeholder="Branch name"
                    className="input"
                    onChange={(e) =>
                      setForm({ ...form, branchName: e.target.value })
                    }
                  />
                  <input
                    placeholder="Account name"
                    className="input"
                    onChange={(e) =>
                      setForm({ ...form, accountName: e.target.value })
                    }
                  />
                  <input
                    placeholder="Account number"
                    className="input"
                    onChange={(e) =>
                      setForm({ ...form, accountNumber: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* EDUCATION + NOTES */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Education"
                  className="input"
                  onChange={(e) =>
                    setForm({ ...form, education: e.target.value })
                  }
                />

                <textarea
                  placeholder="Notes"
                  className="input"
                  rows={2}
                  onChange={(e) =>
                    setForm({ ...form, notes: e.target.value })
                  }
                />
              </div>

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
                  {loading ? "Saving..." : "Save Employee"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
