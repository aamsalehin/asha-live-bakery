import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* ===========================
   GET: Fetch production data
   =========================== */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const date = searchParams.get("date");
    const branchId = searchParams.get("branchId");

    const where: any = {};

    if (date) {
      where.date = new Date(date);
    }

    if (branchId) {
      where.branchId = Number(branchId);
    }

    const production = await prisma.productionDay.findMany({
      where,
      orderBy: { date: "desc" },
      include: {
        branch: {
          select: { id: true, name: true },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                unit: true,
              },
            },
          },
        },
      },
    });

    // ✅ ALWAYS return JSON
    return NextResponse.json(production);
  } catch (error) {
    console.error("GET PRODUCTION ERROR:", error);

    // ✅ Never return empty body
    return NextResponse.json([], { status: 500 });
  }
}

/* ===========================
   POST: Save daily production
   =========================== */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { date, branchId, items } = body;

    // 🔐 Validation
    if (
      !date ||
      !branchId ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ Create or get ProductionDay
    const productionDay = await prisma.productionDay.upsert({
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

    // 2️⃣ Save items (unit ALWAYS from Product)
    for (const item of items) {
      if (!item.productId || !item.quantity) continue;

      const product = await prisma.product.findUnique({
        where: { id: Number(item.productId) },
        select: { unit: true },
      });

      if (!product) continue;

      await prisma.productionItem.upsert({
        where: {
          productionDayId_productId: {
            productionDayId: productionDay.id,
            productId: Number(item.productId),
          },
        },
        update: {
          quantity: Number(item.quantity),
          unit: product.unit,
        },
        create: {
          productionDayId: productionDay.id,
          productId: Number(item.productId),
          quantity: Number(item.quantity),
          unit: product.unit,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SAVE PRODUCTION ERROR:", error);

    return NextResponse.json(
      { error: "Failed to save production" },
      { status: 500 }
    );
  }
}
