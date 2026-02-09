import Sidebar from "@/app/components/admin/sidebar/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 md:ml-64 bg-[var(--admin-bg)] min-h-screen">
        {children}
      </main>
    </div>
  );
}
