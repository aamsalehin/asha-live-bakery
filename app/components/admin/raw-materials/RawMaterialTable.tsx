"use client";

import { Trash2, FlaskConical } from "lucide-react";
import AdminTable, { AdminTableColumn } from "../ui/AdminTable";


type RawMaterial = {
  id: number;
  name: string;
  brand?: string | null;
  quantity: number;
  unit: string;
  price?: number | null;
};

type Props = {
  materials: RawMaterial[];
  onChange: () => void;
};

export default function RawMaterialTable({
  materials,
  onChange,
}: Props) {
  const remove = async (id: number) => {
    if (!confirm("Delete this raw material?")) return;

    await fetch("/api/admin/raw-materials", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    onChange();
  };

  const columns: AdminTableColumn<RawMaterial>[] = [
    {
      key: "name",
      header: "Name",
      render: (m) => (
        <div className="flex items-center gap-2">
          <FlaskConical size={14} className="opacity-70" />
          <span className="font-medium">{m.name}</span>
        </div>
      ),
    },
    {
      key: "brand",
      header: "Brand",
      render: (m) => m.brand || "-",
    },
    {
      key: "quantity",
      header: "Quantity",
      align: "center",
      render: (m) => m.quantity,
    },
    {
      key: "unit",
      header: "Unit",
      align: "center",
      render: (m) => m.unit,
    },
    {
      key: "price",
      header: "Price",
      align: "right",
      render: (m) =>
        m.price ? `৳ ${m.price}` : "-",
    },
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (m) => (
        <button
          onClick={() => remove(m.id)}
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
      rows={materials}
      emptyText="No raw materials added"
      rowKey={(row) => row.id}
    />
  );
}
