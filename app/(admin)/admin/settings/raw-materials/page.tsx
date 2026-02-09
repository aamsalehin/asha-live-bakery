"use client";

import { useEffect, useState } from "react";
import AddRawMaterialModal from "@/app/components/admin/raw-materials/AddRawMaterialModal";
import RawMaterialTable from "@/app/components/admin/raw-materials/RawMaterialTable";

export default function RawMaterialsPage() {
  const [materials, setMaterials] = useState([]);

  const fetchMaterials = async () => {
    const res = await fetch("/api/admin/raw-materials", {
      cache: "no-store",
    });
    setMaterials(await res.json());
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Raw Materials</h1>
        <AddRawMaterialModal onSuccess={fetchMaterials} />
      </div>

      {/* Table */}
      <RawMaterialTable
        materials={materials}
        onChange={fetchMaterials}
      />
    </div>
  );
}
