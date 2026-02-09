"use client";

import { Trash2, Package } from "lucide-react";
import AdminTable, { AdminTableColumn } from "../ui/AdminTable";


type Accessory = {
  id: number;
  name: string;
  unit: string;
  quantity: number;
  brand?: string | null;
};

type Props = {
  accessories: Accessory[];
  onChange: () => void;
};

export default function AccessoryTable({
  accessories,
  onChange,
}: Props) {
  const remove = async (id: number) => {
    if (!confirm("Delete this accessory?")) return;

    await fetch("/api/admin/accessories", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    onChange();
  };

  const columns: AdminTableColumn<Accessory>[] = [
    {
      key: "name",
      header: "Name",
      render: (a) => (
        <div className="flex items-center gap-2">
          <Package size={14} className="opacity-70" />
          <span className="font-medium">{a.name}</span>
        </div>
      ),
    },
    {
      key: "unit",
      header: "Unit",
      render: (a) => a.unit,
    },
    {
      key: "quantity",
      header: "Quantity",
      align: "center",
      render: (a) => a.quantity,
    },
    {
      key: "brand",
      header: "Brand",
      render: (a) => a.brand || "-",
    },
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (a) => (
        <button
          onClick={() => remove(a.id)}
          className="
            inline-flex items-center justify-center
            w-8 h-8 rounded-md
            text-[var(--admin-danger)]
            hover:bg-[var(--admin-soft-bg)]
          "
        >
          <Trash2 size={14} />
        </button>
      ),
    },
  ];

  return (
    <AdminTable
      columns={columns}
      rows={accessories}
      emptyText="No accessories found"
      rowKey={(row) => row.id}
    />
  );
}
