"use client";

export default function OrderCard({ order, onReceive }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-bold">
          Order #{order.id.slice(0, 6)}
        </h3>
        <span className="text-sm opacity-70">
          {new Date(order.createdAt).toLocaleTimeString()}
        </span>
      </div>

      {/* Customer */}
      <div className="text-sm space-y-1">
        <p><b>📞 Phone:</b> {order.phone}</p>
        <p><b>📍 Address:</b> {order.address}</p>
      </div>

      {/* Items */}
      <div className="border-t pt-3 space-y-1 text-sm">
        {order.items.map((item: any) => (
          <p key={item.id}>
            • {item.name} × {item.qty}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2">
        <span className="font-bold text-lg text-[var(--primary)]">
          ৳ {order.total}
        </span>

        <button
          onClick={() => onReceive(order.id)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Received
        </button>
      </div>
    </div>
  );
}
