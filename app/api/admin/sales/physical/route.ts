import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* ================= GET SALES ================= */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    const branchId = searchParams.get("branchId");

    const where: any = {};
    if (date) where.date = new Date(date);
    if (branchId) where.branchId = Number(branchId);

    const data = await prisma.salesDay.findMany({
      where,
      include: {
        branch: true,
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: { date: "desc" },
    });

    return NextResponse.json(data); // ✅ ALWAYS JSON
  } catch (error) {
    console.error("GET SALES ERROR:", error);
    return NextResponse.json([], { status: 500 }); // ✅ NEVER EMPTY BODY
  }
}

/* ================= POST SALES ================= */
export async function POST(req: Request) {
  try {
    const { date, branchId, items } = await req.json();

    if (!date || !branchId || !items?.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const salesDay = await prisma.salesDay.upsert({
      where: {
        date_branchId: {
          date: new Date(date),
          branchId: Number(branchId),
        },
      },
      update: {},
      create: {
        date: new Date(date),
        branchId: Number(branchId),
      },
    });

    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { id: Number(item.productId) },
        select: { unit: true },
      });

      if (!product) continue;

      const total = Number(item.quantity) * Number(item.unitPrice);

      await prisma.salesItem.upsert({
        where: {
          salesDayId_productId: {
            salesDayId: salesDay.id,
            productId: Number(item.productId),
          },
        },
        update: {
          quantity: Number(item.quantity),
          unitPrice: Number(item.unitPrice),
          totalPrice: total,
        },
        create: {
          salesDayId: salesDay.id,
          productId: Number(item.productId),
          quantity: Number(item.quantity),
          unit: product.unit,
          unitPrice: Number(item.unitPrice),
          totalPrice: total,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST SALES ERROR:", error);
    return NextResponse.json(
      { error: "Failed to save sales" },
      { status: 500 }
    );
  }
}
