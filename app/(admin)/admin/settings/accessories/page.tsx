"use client";

import { useEffect, useState } from "react";
import AddAccessoryModal from "@/app/components/admin/accessories/AddAccessoryModal";
import AccessoryTable from "@/app/components/admin/accessories/AccessoryTable";

export default function AccessoriesPage() {
  const [accessories, setAccessories] = useState([]);

  const fetchAccessories = async () => {
    const res = await fetch("/api/admin/accessories", {
      cache: "no-store",
    });
    setAccessories(await res.json());
  };

  useEffect(() => {
    fetchAccessories();
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Accessories</h1>
        <AddAccessoryModal onSuccess={fetchAccessories} />
      </div>

      {/* Table */}
      <AccessoryTable
        accessories={accessories}
        onChange={fetchAccessories}
      />
    </div>
  );
}
