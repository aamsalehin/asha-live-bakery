import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* =======================
   GET Purchases (filters)
======================= */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const date = searchParams.get("date");
  const branchId = searchParams.get("branchId");
  const supplierId = searchParams.get("supplierId");

  const where: any = {};
  if (date) where.date = new Date(date);
  if (branchId) where.branchId = Number(branchId);
  if (supplierId) where.supplierId = Number(supplierId);

  const purchases = await prisma.purchase.findMany({
    where,
    include: {
      branch: true,
      supplier: true,
      items: {
        include: {
          rawMaterial: true,
        },
      },
    },
    orderBy: { date: "desc" },
  });

  return NextResponse.json(purchases);
}

/* =======================
   CREATE Purchase
======================= */
export async function POST(req: Request) {
  try {
    const {
      date,
      branchId,
      supplierId,
      invoiceNumber,
      notes,
      items,
    } = await req.json();

    if (!date || !branchId || !supplierId || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔹 Calculate total amount
    const totalAmount = items.reduce(
      (sum: number, i: any) =>
        sum + Number(i.quantity) * Number(i.unitPrice),
      0
    );

    const purchase = await prisma.purchase.create({
      data: {
        date: new Date(date),
        branchId: Number(branchId),
        supplierId: Number(supplierId),
        invoiceNumber,
        notes,
        totalAmount,

        items: {
          create: await Promise.all(
            items.map(async (i: any) => {
              const rawMaterial = await prisma.rawMaterial.findUnique({
                where: { id: Number(i.rawMaterialId) },
                select: { unit: true },
              });

              if (!rawMaterial) {
                throw new Error("Invalid raw material");
              }

              return {
                rawMaterialId: Number(i.rawMaterialId),
                quantity: Number(i.quantity),
                unit: rawMaterial.unit, // ✅ source of truth
                unitPrice: Number(i.unitPrice),
                totalPrice: Number(i.quantity) * Number(i.unitPrice),
              };
            })
          ),
        },
      },
      include: {
        branch: true,
        supplier: true,
        items: {
          include: {
            rawMaterial: true,
          },
        },
      },
    });

    return NextResponse.json(purchase);
  } catch (error) {
    console.error("PURCHASE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to save purchase" },
      { status: 500 }
    );
  }
}
