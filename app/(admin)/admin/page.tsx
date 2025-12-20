export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">128</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Pending Orders</p>
          <h2 className="text-3xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Today Revenue</p>
          <h2 className="text-3xl font-bold mt-2">৳ 4,560</h2>
        </div>

      </div>
    </div>
  );
}
