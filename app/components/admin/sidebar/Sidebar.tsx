"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Store,
  ClipboardList,
  Factory,
  Package,
  Users,
  Wallet,
  Landmark,
  FileBarChart,
  Settings,
  Menu,
  X,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import AdminThemeToggle from "./AdminThemeToggle";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div
        className="
          md:hidden flex items-center justify-between px-4 py-3
          bg-[var(--admin-sidebar-bg)]
          border-b border-[var(--admin-sidebar-border)]
          text-[var(--admin-sidebar-text)]
        "
      >
        <p className="font-bold">Asha Live Bakery</p>
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64
          bg-[var(--admin-sidebar-bg)]
          border-r border-[var(--admin-sidebar-border)]
          text-[var(--admin-sidebar-text)]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            flex items-center justify-between gap-2
            p-4 border-b border-[var(--admin-sidebar-border)]
          "
        >
          <h1 className="text-lg font-bold">Asha Live Bakery</h1>

          <div className="flex items-center gap-2">
            <AdminThemeToggle />
            <button
              className="md:hidden"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
        </div>

        {/* ================= NAV ================= */}
        <nav className="p-4 space-y-6 overflow-y-auto h-full pb-24">

          {/* Overview */}
          <SidebarSection title="Overview">
            <SidebarItem
              href="/admin"
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
            />
          </SidebarSection>

          {/* Orders */}
          <SidebarSection title="Orders & Sales">
            <SidebarItem
              href="/admin/orders/online"
              icon={<ShoppingCart size={18} />}
              label="Online Orders"
            />
            <SidebarItem
              href="/admin/orders/physical"
              icon={<Store size={18} />}
              label="Physical Sales"
            />
            <SidebarItem
              href="/admin/orders/daily-summary"
              icon={<ClipboardList size={18} />}
              label="Daily Summary"
            />
          </SidebarSection>

          {/* Production */}
          <SidebarSection title="Production">
            <SidebarItem
              href="/admin/production/daily"
              icon={<Factory size={18} />}
              label="Daily Production"
            />
            <SidebarItem
              href="/admin/production/history"
              icon={<FileBarChart size={18} />}
              label="Production History"
            />
          </SidebarSection>

          {/* Inventory */}
          <SidebarSection title="Inventory">
            <SidebarItem
              href="/admin/inventory/raw-materials"
              icon={<Package size={18} />}
              label="Raw Materials"
            />
            <SidebarItem
              href="/admin/inventory/purchases"
              icon={<ShoppingCart size={18} />}
              label="Purchases"
            />
            <SidebarItem
              href="/admin/inventory/stock"
              icon={<ClipboardList size={18} />}
              label="Stock Report"
            />
            <SidebarItem
              href="/admin/inventory/suppliers"
              icon={<Users size={18} />}
              label="Suppliers"
            />
          </SidebarSection>

          {/* Finance */}
          <SidebarSection title="Finance">
            <SidebarItem
              href="/admin/finance/branches"
              icon={<Wallet size={18} />}
              label="Branch Wallets"
            />
            <SidebarItem
              href="/admin/finance/expenses"
              icon={<ClipboardList size={18} />}
              label="Expenses"
            />
            <SidebarItem
              href="/admin/finance/suppliers"
              icon={<Users size={18} />}
              label="Supplier Dues"
            />
            <SidebarItem
              href="/admin/finance/transfers"
              icon={<Landmark size={18} />}
              label="Transfers"
            />
            <SidebarItem
              href="/admin/finance/bank"
              icon={<Landmark size={18} />}
              label="Bank Ledger"
            />
            <SidebarItem
              href="/admin/finance/salaries"
              icon={<Users size={18} />}
              label="Salaries"
            />
            <SidebarItem
              href="/admin/finance/partners"
              icon={<Users size={18} />}
              label="Partner Payouts"
            />
            <SidebarItem
              href="/admin/finance/profit-loss"
              icon={<FileBarChart size={18} />}
              label="Profit & Loss"
            />
          </SidebarSection>

          {/* Reports */}
          <SidebarSection title="Reports">
            <SidebarItem
              href="/admin/reports/daily"
              icon={<FileBarChart size={18} />}
              label="Daily Reports"
            />
            <SidebarItem
              href="/admin/reports/monthly"
              icon={<FileBarChart size={18} />}
              label="Monthly Reports"
            />
            <SidebarItem
              href="/admin/reports/yearly"
              icon={<FileBarChart size={18} />}
              label="Yearly Reports"
            />
            <SidebarItem
              href="/admin/reports/deviation"
              icon={<FileBarChart size={18} />}
              label="Cash Deviation"
            />
          </SidebarSection>

          {/* Settings */}
          <SidebarSection title="Settings">
            <SidebarItem
              href="/admin/settings/branches"
              icon={<Store size={18} />}
              label="Branches"
            />
            <SidebarItem
              href="/admin/settings/items"
              icon={<Package size={18} />}
              label="Items"
            />
            <SidebarItem
              href="/admin/settings/categories"
              icon={<Package size={18} />}
              label="Categories"
            />
            <SidebarItem
              href="/admin/settings/suppliers"
              icon={<Users size={18} />}
              label="Suppliers"
            />
            <SidebarItem
              href="/admin/settings/raw-materials"
              icon={<Users size={18} />}
              label="Raw Materials"
            />
            <SidebarItem
              href="/admin/settings/accessories"
              icon={<Users size={18} />}
              label="Accessories"
            />
            <SidebarItem
              href="/admin/settings/users"
              icon={<Settings size={18} />}
              label="Users & Roles"
            />
          </SidebarSection>

        </nav>
      </aside>
    </>
  );
}
