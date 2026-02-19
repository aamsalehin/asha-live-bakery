// "use client";

// import { useState } from "react";
// import { Plus } from "lucide-react";

// export default function AddAccessoryModal({ onSuccess }) {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     unit: "pcs",
//     quantity: "",
//     pricePerUnit: "",
//     brand: "",
//     description: "",
//   });

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     await fetch("/api/admin/accessories", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...form,
//         quantity: Number(form.quantity),
//         pricePerUnit: form.pricePerUnit
//           ? Number(form.pricePerUnit)
//           : null,
//       }),
//     });

//     setLoading(false);
//     setOpen(false);
//     onSuccess?.();
//   };

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="
//           flex items-center gap-2 px-4 py-2 rounded-lg
//           bg-[var(--admin-button-bg)]
//           text-[var(--admin-button-text)]
//           hover:bg-[var(--admin-button-hover)]
//         "
//       >
//         <Plus size={16} />
//         Add Accessory
//       </button>

//       {open && (
//         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
//           <div className="w-full max-w-xl rounded-xl p-6 bg-[var(--admin-card-bg)] border">
//             <h2 className="text-xl font-semibold mb-4">
//               Add Accessory
//             </h2>

//             <form onSubmit={submit} className="grid grid-cols-2 gap-4">
//               <input
//                 required
//                 placeholder="Accessory name"
//                 className="input col-span-2"
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//               />

//               <select
//                 className="input"
//                 onChange={(e) =>
//                   setForm({ ...form, unit: e.target.value })
//                 }
//               >
//                 <option value="pcs">pcs</option>
//                 <option value="kg">kg</option>
//                 <option value="gm">gm</option>
//                 <option value="roll">roll</option>
//                 <option value="box">box</option>
//               </select>

//               <input
//                 required
//                 type="number"
//                 placeholder="Quantity"
//                 className="input"
//                 onChange={(e) =>
//                   setForm({ ...form, quantity: e.target.value })
//                 }
//               />

//               <input
//                 type="number"
//                 placeholder="Price per unit (optional)"
//                 className="input col-span-2"
//                 onChange={(e) =>
//                   setForm({ ...form, pricePerUnit: e.target.value })
//                 }
//               />

//               <input
//                 placeholder="Brand (optional)"
//                 className="input col-span-2"
//                 onChange={(e) =>
//                   setForm({ ...form, brand: e.target.value })
//                 }
//               />

//               <textarea
//                 placeholder="Description (optional)"
//                 className="input col-span-2"
//                 rows={2}
//                 onChange={(e) =>
//                   setForm({ ...form, description: e.target.value })
//                 }
//               />

//               <div className="col-span-2 flex justify-end gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-2 rounded-lg border"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   disabled={loading}
//                   className="px-4 py-2 rounded-lg bg-[var(--admin-button-bg)] text-[var(--admin-button-text)]"
//                 >
//                   {loading ? "Saving..." : "Save"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

/* ✅ Props Type */
interface Props {
  onSuccess?: () => void;
}

/* ✅ Form Type */
interface AccessoryForm {
  name: string;
  unit: string;
  quantity: string;
  pricePerUnit: string;
  brand: string;
  description: string;
}

export default function AddAccessoryModal({ onSuccess }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<AccessoryForm>({
    name: "",
    unit: "pcs",
    quantity: "",
    pricePerUnit: "",
    brand: "",
    description: "",
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/admin/accessories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          quantity: Number(form.quantity),
          pricePerUnit: form.pricePerUnit
            ? Number(form.pricePerUnit)
            : null,
        }),
      });

      setOpen(false);
      onSuccess?.();

      // Reset form
      setForm({
        name: "",
        unit: "pcs",
        quantity: "",
        pricePerUnit: "",
        brand: "",
        description: "",
      });
    } catch (error) {
      console.error("Accessory save error:", error);
    } finally {
      setLoading(false);
    }
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
        Add Accessory
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="w-full max-w-xl rounded-xl p-6 bg-[var(--admin-card-bg)] border border-[var(--admin-card-border)]">
            <h2 className="text-xl font-semibold mb-4">
              Add Accessory
            </h2>

            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <input
                required
                value={form.name}
                placeholder="Accessory name"
                className="input col-span-2"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <select
                className="input"
                value={form.unit}
                onChange={(e) =>
                  setForm({ ...form, unit: e.target.value })
                }
              >
                <option value="pcs">pcs</option>
                <option value="kg">kg</option>
                <option value="gm">gm</option>
                <option value="roll">roll</option>
                <option value="box">box</option>
              </select>

              <input
                required
                type="number"
                value={form.quantity}
                placeholder="Quantity"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, quantity: e.target.value })
                }
              />

              <input
                type="number"
                value={form.pricePerUnit}
                placeholder="Price per unit (optional)"
                className="input col-span-2"
                onChange={(e) =>
                  setForm({ ...form, pricePerUnit: e.target.value })
                }
              />

              <input
                value={form.brand}
                placeholder="Brand (optional)"
                className="input col-span-2"
                onChange={(e) =>
                  setForm({ ...form, brand: e.target.value })
                }
              />

              <textarea
                value={form.description}
                placeholder="Description (optional)"
                className="input col-span-2"
                rows={2}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
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
                  className="px-4 py-2 rounded-lg bg-[var(--admin-button-bg)] text-[var(--admin-button-text)]"
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
