"use client";

import { useEffect, useState } from "react";
import AdminTable, { AdminTableColumn } from "@/app/components/admin/ui/AdminTable";
import AddPurchaseModal from "@/app/components/admin/inventory/AddPurchaseModal";

export default function PurchasesPage() {
  const [purchases, setPurchases] = useState<any[]>([]);
  const [branches, setBranches] = useState<any[]>([]);
  const [suppliers, setSuppliers] = useState<any[]>([]);
  const [rawMaterials, setRawMaterials] = useState<any[]>([]);

  const fetchAll = async () => {
    try {
      const [p, b, s, r] = await Promise.all([
        fetch("/api/admin/purchases", { cache: "no-store" }).then(res => res.json()),
        fetch("/api/admin/branches", { cache: "no-store" }).then(res => res.json()),
        fetch("/api/admin/suppliers", { cache: "no-store" }).then(res => res.json()),
        fetch("/api/admin/raw-materials", { cache: "no-store" }).then(res => res.json()),
      ]);

      setPurchases(Array.isArray(p) ? p : []);
      setBranches(Array.isArray(b) ? b : []);
      setSuppliers(Array.isArray(s) ? s : []);
      setRawMaterials(Array.isArray(r) ? r : []);
    } catch (e) {
      console.error("PURCHASE PAGE FETCH ERROR:", e);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const columns: AdminTableColumn<any>[] = [
    {
      key: "date",
      header: "Date",
      render: (p) => new Date(p.date).toLocaleDateString(),
    },
    {
      key: "branch",
      header: "Branch",
      render: (p) => p.branch?.name || "-",
    },
    {
      key: "supplier",
      header: "Supplier",
      render: (p) => p.supplier?.name || "-",
    },
    {
      key: "amount",
      header: "Total",
      align: "right",
      render: (p) => `৳ ${p.totalAmount || 0}`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Purchases</h1>

        <AddPurchaseModal onSuccess={fetchAll} />
      </div>

      {/* Table */}
      <AdminTable
        columns={columns}
        rows={purchases}
        emptyText="No purchases found"
        rowKey={(row) => row.id}
      />
    </div>
  );
}
