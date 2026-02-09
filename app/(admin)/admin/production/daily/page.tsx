"use client";

import { useEffect, useState } from "react";
import AddProductionModal from "@/app/components/admin/production/AddProductionModal";

interface Branch {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  unit: string;
}

export default function DailyProductionPage() {
  const [data, setData] = useState<any[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [branchId, setBranchId] = useState("");
  const [date, setDate] = useState("");

 const fetchProduction = async () => {
  try {
    const params = new URLSearchParams();
    if (date) params.append("date", date);
    if (branchId) params.append("branchId", branchId);

    const res = await fetch(
      `/api/admin/production?${params.toString()}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("FETCH PRODUCTION FAILED:", res.status);
      setData([]);
      return;
    }

    const text = await res.text();

    if (!text) {
      // ✅ API returned empty body
      setData([]);
      return;
    }

    setData(JSON.parse(text));
  } catch (error) {
    console.error("FETCH PRODUCTION ERROR:", error);
    setData([]);
  }
};


  const fetchBranches = async () => {
    const res = await fetch("/api/admin/branches", { cache: "no-store" });
    setBranches(await res.json());
  };

  const fetchProducts = async () => {
    const res = await fetch("/api/admin/products", { cache: "no-store" });
    setProducts(await res.json());
  };

  useEffect(() => {
    fetchBranches();
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProduction();
  }, [date, branchId]);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Daily Production</h1>

        <AddProductionModal
          branches={branches}
          products={products}
          onSuccess={fetchProduction}
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

      {/* CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((day) => (
          <div
            key={day.id}
            className="bg-[var(--admin-card-bg)] border border-[var(--admin-card-border)] rounded-xl p-5 space-y-3"
          >
            <div className="flex justify-between text-sm">
              <p className="font-semibold">
                {new Date(day.date).toDateString()}
              </p>
              <p className="opacity-70">{day.branch.name}</p>
            </div>

            <ul className="space-y-2 text-sm">
              {day.items.map((item: any) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.product.name}</span>
                  <span className="opacity-80">
                    {item.quantity} {item.product.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <p className="opacity-60 text-sm">No production data found</p>
      )}
    </div>
  );
}
