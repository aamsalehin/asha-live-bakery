"use client";

import { useEffect, useState } from "react";

type Branch = {
  id: number;
  name: string;
};

type PhysicalDay = {
  branchId: number;
  items: {
    totalPrice: number;
  }[];
};

type ActualDay = {
  branchId: number;
  amount: number;
};

export default function CashDeviationPage() {
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [branchId, setBranchId] = useState("");
  const [branches, setBranches] = useState<Branch[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  /* ================= FETCH ================= */
  const fetchAll = async () => {
    const qs = new URLSearchParams();
    qs.append("date", date);
    if (branchId) qs.append("branchId", branchId);

    const [bRes, pRes, aRes] = await Promise.all([
      fetch("/api/admin/branches"),
      fetch(`/api/admin/sales/physical?${qs.toString()}`),
      fetch(`/api/admin/sales/actual?${qs.toString()}`),
    ]);

    const branches = await bRes.json();
    const physical = await pRes.json();
    const actual = await aRes.json();

    setBranches(branches);

    const physicalMap: Record<number, number> = {};
    physical.forEach((d: PhysicalDay) => {
      const sum = d.items.reduce(
        (t, i) => t + i.totalPrice,
        0
      );
      physicalMap[d.branchId] = sum;
    });

    const actualMap: Record<number, number> = {};
    actual.forEach((d: ActualDay) => {
      actualMap[d.branchId] = d.amount;
    });

    const merged = branches.map((b: Branch) => {
      const calculated = physicalMap[b.id] || 0;
      const actualAmt = actualMap[b.id] || 0;
      const deviation = actualAmt - calculated;

      return {
        branch: b.name,
        calculated,
        actual: actualAmt,
        deviation,
      };
    });

    setRows(merged);
  };

  useEffect(() => {
    fetchAll();
  }, [date, branchId]);

  const totalCalculated = rows.reduce(
    (t, r) => t + r.calculated,
    0
  );
  const totalActual = rows.reduce(
    (t, r) => t + r.actual,
    0
  );
  const totalDeviation = totalActual - totalCalculated;

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cash Deviation</h1>

        <div className="flex gap-3">
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
          <thead className="border-b font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Branch</th>
              <th className="px-4 py-3 text-right">Calculated</th>
              <th className="px-4 py-3 text-right">Actual</th>
              <th className="px-4 py-3 text-right">Deviation</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className="border-b hover:bg-[var(--admin-soft-bg)]"
              >
                <td className="px-4 py-3">{r.branch}</td>
                <td className="px-4 py-3 text-right">
                  ৳ {r.calculated.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-right">
                  ৳ {r.actual.toFixed(2)}
                </td>
                <td
                  className={`px-4 py-3 text-right font-medium ${
                    r.deviation > 0
                      ? "text-green-600"
                      : r.deviation < 0
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  ৳ {r.deviation.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="font-semibold border-t">
              <td className="px-4 py-4">Total</td>
              <td className="px-4 py-4 text-right">
                ৳ {totalCalculated.toFixed(2)}
              </td>
              <td className="px-4 py-4 text-right">
                ৳ {totalActual.toFixed(2)}
              </td>
              <td
                className={`px-4 py-4 text-right ${
                  totalDeviation > 0
                    ? "text-green-600"
                    : totalDeviation < 0
                    ? "text-red-600"
                    : "text-gray-500"
                }`}
              >
                ৳ {totalDeviation.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
