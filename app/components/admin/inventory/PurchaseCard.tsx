"use client";

export default function PurchaseCard({ purchase }) {
  return (
    <div
      className="
        bg-[var(--admin-card-bg)]
        border border-[var(--admin-card-border)]
        rounded-xl p-5 space-y-3
      "
    >
      {/* HEADER */}
      <div className="flex justify-between text-sm">
        <div>
          <p className="font-semibold">
            {new Date(purchase.date).toDateString()}
          </p>
          <p className="opacity-70">
            {purchase.branch.name} • {purchase.supplier.name}
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold">
            ৳ {purchase.totalAmount || 0}
          </p>
          <p className="opacity-60 text-xs">
            {purchase.invoiceNo || "No invoice"}
          </p>
        </div>
      </div>

      {/* ITEMS */}
      <div className="border-t pt-3">
        <table className="w-full text-sm">
          <thead className="opacity-60">
            <tr>
              <th className="text-left">Item</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>

          <tbody>
            {purchase.items.map(item => (
              <tr key={item.id} className="border-t">
                <td>{item.rawMaterial.name}</td>
                <td className="text-right">
                  {item.quantity} {item.unit}
                </td>
                <td className="text-right">
                  ৳ {item.unitPrice}
                </td>
                <td className="text-right">
                  ৳ {item.totalPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {purchase.notes && (
        <p className="text-sm opacity-70">
          📝 {purchase.notes}
        </p>
      )}
    </div>
  );
}
