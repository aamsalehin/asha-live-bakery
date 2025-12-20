import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r px-6 py-8">
      <h2 className="text-2xl font-bold mb-10">Admin</h2>

      <nav className="space-y-4">
        <Link href="/admin" className="block font-medium">
          Dashboard
        </Link>
        <Link href="/admin/orders" className="block font-medium">
          Orders
        </Link>
        <Link href="/admin/finance" className="block font-medium">
          Finance
        </Link>
      </nav>
    </aside>
  );
}
