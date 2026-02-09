"use client";

import AddEmployeeModal from "@/app/components/admin/employees/AddEmployeeModal";
import EmployeeTable from "@/app/components/admin/employees/EmployeeTable";
import { useEffect, useState } from "react";


export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [branches, setBranches] = useState([]);
  const [branchId, setBranchId] = useState("");

  const fetchEmployees = async () => {
    const params = new URLSearchParams();
    if (branchId) params.append("branchId", branchId);

    const res = await fetch(
      `/api/admin/employees?${params.toString()}`,
      { cache: "no-store" }
    );
    setEmployees(await res.json());
  };

  const fetchBranches = async () => {
    const res = await fetch("/api/admin/branches");
    setBranches(await res.json());
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [branchId]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Employees</h1>
        <AddEmployeeModal
          branches={branches}
          onSuccess={fetchEmployees}
        />
      </div>

      {/* Filters */}
      <div className="flex gap-4">
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

      {/* Table */}
      <EmployeeTable
        employees={employees}
        onChange={fetchEmployees}
      />
    </div>
  );
}
