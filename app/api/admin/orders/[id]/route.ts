// import { NextResponse } from "next/server";
// import prisma from '@/lib/prisma'

// export const runtime = "nodejs";

// export async function PATCH(
//   _req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   // ✅ UNWRAP params
//   const { id } = await context.params;

//   console.log("PATCH ORDER ID:", id);

//   if (!id) {
//     return NextResponse.json(
//       { error: "Missing order id" },
//       { status: 400 }
//     );
//   }

//   try {
//     const order = await prisma.order.update({
//       where: { id },
//       data: { status: "received" },
//     });

//     return NextResponse.json({ success: true, order });
//   } catch (error) {
//     console.error("PATCH ERROR:", error);
//     return NextResponse.json(
//       { error: "Failed to update order status" },
//       { status: 500 }
//     );
//   }
// }
