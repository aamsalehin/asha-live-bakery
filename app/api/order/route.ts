import { NextResponse } from "next/server";
import prisma from '../../../app/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { phone, name, address, items, subtotal, deliveryCharge } = body;

    // ✅ SAFETY CHECK
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Cart items missing" },
        { status: 400 }
      );
    }

    const order = await prisma.order.create({
      data: {
        phone,
        name,
        address,
        subtotal,
        deliveryCharge,
        total: subtotal + deliveryCharge,

        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            qty: item.qty,
            unit: item.unit ?? "pcs",
          })),
        },
      },
    });

    return NextResponse.json(
      { orderId: order.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order API Error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
