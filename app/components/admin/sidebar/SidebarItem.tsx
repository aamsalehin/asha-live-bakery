"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SidebarItem({ href, icon, label }: Props) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={clsx(
  "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition",
  active
    ? "bg-[var(--admin-sidebar-active-bg)] text-[var(--admin-sidebar-active-text)]"
    : "text-[var(--admin-sidebar-text)] hover:bg-[var(--admin-sidebar-hover-bg)]"
)}

    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
