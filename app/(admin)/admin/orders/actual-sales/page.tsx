"use client";

import { useEffect, useState } from "react";

type Branch = {
  id: number;
  name: string;
};

type ActualSale = {
  branchId: number;
  amount: number;
};

export default function ActualSalesPage() {
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [branches, setBranches] = useState<Branch[]>([]);
  const [sales, setSales] = useState<Record<number, number>>({});

  /* ================= FETCH ================= */
  const fetchBranches = async () => {
    const res = await fetch("/api/admin/branches");
    setBranches(await res.json());
  };

  const fetchSales = async () => {
    const res = await fetch(
      `/api/admin/sales/actual?date=${date}`,
      { cache: "no-store" }
    );

    const json = await res.json();

    const map: Record<number, number> = {};
    json.forEach((s: any) => {
      map[s.branchId] = s.amount;
    });

    setSales(map);
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  useEffect(() => {
    fetchSales();
  }, [date]);

  /* ================= SAVE ================= */
  const save = async (branchId: number, amount: number) => {
    await fetch("/api/admin/sales/actual", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        branchId,
        amount,
      }),
    });

    fetchSales();
  };

  const total = Object.values(sales).reduce(
    (sum, a) => sum + a,
    0
  );

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Actual Sales</h1>

        <input
          type="date"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div
        className="
          rounded-xl border
          bg-[var(--admin-card-bg)]
          border-[var(--admin-card-border)]
        "
      >
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="font-semibold">
              <th className="px-4 py-3 text-left">Branch</th>
              <th className="px-4 py-3 text-right">Sales Amount</th>
            </tr>
          </thead>

          <tbody>
            {branches.map((b) => (
              <tr
                key={b.id}
                className="border-b hover:bg-[var(--admin-soft-bg)]"
              >
                <td className="px-4 py-3">{b.name}</td>
                <td className="px-4 py-3 text-right">
                  <input
                    type="number"
                    className="input text-right max-w-[160px] ml-auto"
                    value={sales[b.id] ?? ""}
                    onChange={(e) =>
                      setSales({
                        ...sales,
                        [b.id]: Number(e.target.value),
                      })
                    }
                    onBlur={() =>
                      save(b.id, sales[b.id] || 0)
                    }
                    placeholder="৳ 0"
                  />
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="font-semibold border-t">
              <td className="px-4 py-4">Total</td>
              <td className="px-4 py-4 text-right">
                ৳ {total.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
