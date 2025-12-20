export default function OrdersTable({ orders }: any) {
  if (orders.length === 0) {
    return <p className="opacity-60">No received orders</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Time</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order: any) => (
            <tr key={order.id} className="border-t">
              <td className="p-3">
                {order.id.slice(0, 8)}
              </td>
              <td className="p-3">{order.phone}</td>
              <td className="p-3">৳ {order.total}</td>
              <td className="p-3 capitalize">
                {order.status}
              </td>
              <td className="p-3">
                {new Date(order.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
