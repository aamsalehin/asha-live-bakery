"use client";

import { useEffect, useState } from "react";
import AddPhysicalSaleModal from "@/app/components/admin/sales/AddPhysicalSaleModal";

type Branch = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  unit: string;
};

export default function PhysicalSalesPage() {
  const [sales, setSales] = useState<any[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [date, setDate] = useState("");
  const [branchId, setBranchId] = useState("");

  /* ---------------- FETCH SALES ---------------- */
//   const fetchSales = async () => {
//     const params = new URLSearchParams();
//     if (date) params.append("date", date);
//     if (branchId) params.append("branchId", branchId);

//     const res = await fetch(
//       `/api/admin/sales/physical?${params.toString()}`,
//       { cache: "no-store" }
//     );

//     const json = await res.json();
//     setSales(json);
//   };

const fetchSales = async () => {
  const params = new URLSearchParams();
  if (date) params.append("date", date);
  if (branchId) params.append("branchId", branchId);

  const res = await fetch(
    `/api/admin/sales/physical?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    setSales([]);
    return;
  }

  const text = await res.text(); // 👈 safer
  if (!text) {
    setSales([]);
    return;
  }

  setSales(JSON.parse(text));
};

  /* ---------------- FETCH BRANCHES ---------------- */
  const fetchBranches = async () => {
    const res = await fetch("/api/admin/branches", { cache: "no-store" });
    setBranches(await res.json());
  };

  /* ---------------- FETCH PRODUCTS ---------------- */
  const fetchProducts = async () => {
    const res = await fetch("/api/admin/products", { cache: "no-store" });
    setProducts(await res.json());
  };

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    fetchBranches();
    fetchProducts();
    fetchSales();
  }, []);

  useEffect(() => {
    fetchSales();
  }, [date, branchId]);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Physical Sales</h1>

        <AddPhysicalSaleModal
          branches={branches}
          products={products}
          onSuccess={fetchSales}
        />
      </div>

      {/* FILTERS */}
      <div className="flex gap-4 flex-wrap">
        <input
          type="date"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="input"
          value={branchId}
          onChange={(e) => setBranchId(e.target.value)}
        >
          <option value="">All Branches</option>
          {branches.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      {/* SALES CARDS */}
      <div className="space-y-6">
        {sales.map((day) => {
          const total = day.items.reduce(
            (sum: number, i: any) => sum + i.totalPrice,
            0
          );

          return (
            <div
              key={day.id}
              className="
                bg-[var(--admin-card-bg)]
                border border-[var(--admin-card-border)]
                rounded-xl p-5
              "
            >
              {/* HEADER */}
              <div className="flex justify-between mb-3">
                <p className="font-semibold">
                  {new Date(day.date).toDateString()}
                </p>
                <p className="opacity-70">{day.branch.name}</p>
              </div>

              {/* ITEMS TABLE */}
              <table className="w-full text-sm">
                <thead className="border-b opacity-70">
                  <tr>
                    <th className="text-left py-2">Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {day.items.map((item: any) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-2">{item.product.name}</td>
                      <td>
                        {item.quantity} {item.unit}
                      </td>
                      <td>৳ {item.unitPrice}</td>
                      <td className="text-right">
                        ৳ {item.totalPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* DAILY TOTAL */}
              <div className="text-right font-semibold pt-3">
                Total: ৳ {total}
              </div>
            </div>
          );
        })}

        {sales.length === 0 && (
          <p className="opacity-60">No sales found</p>
        )}
      </div>
    </div>
  );
}
