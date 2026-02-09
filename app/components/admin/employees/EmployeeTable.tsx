"use client";

import { Trash2, User } from "lucide-react";
import AdminTable, { AdminTableColumn } from "../ui/AdminTable";


export default function EmployeeTable({ employees, onChange }) {
  const remove = async (id: number) => {
    if (!confirm("Delete this employee?")) return;

    await fetch("/api/admin/employees", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    onChange();
  };

  const columns: AdminTableColumn<any>[] = [
    {
      key: "name",
      header: "Employee",
      render: (e) => (
        <div className="flex items-center gap-2">
          <User size={14} />
          <div>
            <p className="font-medium">{e.name}</p>
            <p className="text-xs opacity-60">{e.phone}</p>
          </div>
        </div>
      ),
    },
    {
      key: "branch",
      header: "Branch",
      render: (e) => e.branch?.name,
    },
    {
      key: "salary",
      header: "Salary",
      align: "right",
      render: (e) => `৳ ${e.salary}`,
    },
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (e) => (
        <button
          onClick={() => remove(e.id)}
          className="
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
      rows={employees}
      emptyText="No employees found"
      rowKey={(e) => e.id}
    />
  );
}
