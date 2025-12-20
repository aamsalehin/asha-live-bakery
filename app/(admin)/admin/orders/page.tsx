// "use client";

// import OrderCard from "@/app/components/admin/order/OrderCard";
// import OrdersTable from "@/app/components/admin/order/OrdersTable";
// import { useEffect, useState } from "react";


// export default function AdminOrdersPage() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     const res = await fetch("/api/admin/orders");
//     const data = await res.json();
//     setOrders(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const markAsReceived = async (orderId: string) => {
//     await fetch("/api/admin/orders", {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         orderId,
//         status: "received",
//       }),
//     });

//     fetchOrders(); // refresh UI
//   };

//   const pendingOrders = orders.filter(
//     (o) => o.status === "pending"
//   );

//   const receivedOrders = orders.filter(
//     (o) => o.status === "received"
//   );

//   if (loading) {
//     return <p className="text-center py-20">Loading orders...</p>;
//   }

//   return (
//     <div className="space-y-14">

//       {/* ================= NEW ORDERS ================= */}
//       <section>
//         <h2 className="text-2xl font-bold mb-6">
//           New Orders
//         </h2>

//         {pendingOrders.length === 0 ? (
//           <p className="opacity-60">No new orders</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pendingOrders.map((order) => (
//               <OrderCard
//                 key={order.id}
//                 order={order}
//                 onReceive={markAsReceived}
//               />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* ================= RECEIVED ORDERS ================= */}
//       <section>
//         <h2 className="text-2xl font-bold mb-6">
//           Received Orders
//         </h2>

//         <OrdersTable orders={receivedOrders} />
//       </section>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";

// export default function AdminOrdersPage() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     const res = await fetch("/api/admin/orders", { cache: "no-store" });
//     const data = await res.json();
//     setOrders(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();

//     // 🔁 POLLING every 5 seconds
//     const interval = setInterval(fetchOrders, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const markAsReceived = async (orderId: string) => {
//     await fetch("/api/admin/orders", {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ orderId }),
//     });

//     fetchOrders();
//   };

//   const pending = orders.filter(o => o.status === "pending");
//   const received = orders.filter(o => o.status === "received");

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Orders</h1>

//       {/* Pending Orders */}
//       <h2 className="text-xl font-semibold mb-4">🕒 Pending</h2>

//       <div className="space-y-4 mb-10">
//         {pending.map(order => (
//           <div key={order.id} className="bg-white p-6 rounded-xl shadow">
//             <p className="font-bold">#{order.id}</p>
//             <p>📞 {order.phone}</p>
//             <p>📍 {order.address}</p>

//             <ul className="list-disc list-inside mt-2">
//               {order.items.map((item: any) => (
//                 <li key={item.id}>
//                   {item.name} × {item.qty}
//                 </li>
//               ))}
//             </ul>

//             <p className="font-bold mt-3">৳ {order.total}</p>

//             <button
//               onClick={() => markAsReceived(order.id)}
//               className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
//             >
//               Mark as Received
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Received Orders */}
//       <h2 className="text-xl font-semibold mb-4">✅ Received</h2>

//       <table className="w-full bg-white shadow rounded-xl">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-3">Order ID</th>
//             <th className="p-3">Phone</th>
//             <th className="p-3">Total</th>
//             <th className="p-3">Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {received.map(order => (
//             <tr key={order.id} className="border-t">
//               <td className="p-3">{order.id}</td>
//               <td className="p-3">{order.phone}</td>
//               <td className="p-3">৳ {order.total}</td>
//               <td className="p-3">
//                 {new Date(order.createdAt).toLocaleTimeString()}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



//WITH SOUND 
"use client";

import OrderCard from "@/app/components/admin/order/OrderCard";
import OrdersTable from "@/app/components/admin/order/OrdersTable";
import { useEffect, useState } from "react";


interface Order {
  id: string;
  phone: string;
  address: string;
  total: number;
  status: "pending" | "received";
  createdAt: string;
  items: any[];
}

export default function AdminOrdersPage() {
  const [pendingOrders, setPendingOrders] = useState<Order[]>([]);
  const [receivedOrders, setReceivedOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // 📦 Fetch orders from DB
  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/admin/orders", {
        cache: "no-store",
      });

      const data: Order[] = await res.json();

      setPendingOrders(data.filter(o => o.status === "pending"));
      setReceivedOrders(data.filter(o => o.status === "received"));
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Poll every 5s
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Mark order as received
  const handleReceive = async (orderId: string) => {
  const res = await fetch(`/api/admin/orders/${orderId}`, {
    method: "PATCH",
  });

  const data = await res.json();
  console.log("PATCH RESPONSE:", data);

  if (!res.ok) {
    throw new Error(data.error || "PATCH failed");
  }

  fetchOrders();
};


  return (
    <div className="min-h-screen">
      {/* CONTENT */}
      <main className=" flex-1 p-8 space-y-12">
        <h1 className="text-3xl font-bold">Orders Dashboard</h1>

        {/* 🔴 PENDING ORDERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            🟡 New Orders
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : pendingOrders.length === 0 ? (
            <p className="opacity-60">No new orders</p>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {pendingOrders.map(order => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onReceive={handleReceive}
                />
              ))}
            </div>
          )}
        </section>

        {/* 🟢 RECEIVED ORDERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            ✅ Received Orders
          </h2>

          <OrdersTable orders={receivedOrders} />
        </section>
      </main>
    </div>
  );
}
