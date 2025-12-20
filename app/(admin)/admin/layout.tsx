import Sidebar from "@/app/components/admin/sidebar/Sidebar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8 ml-64">
        {children}
      </main>
    </div>
  );
}
