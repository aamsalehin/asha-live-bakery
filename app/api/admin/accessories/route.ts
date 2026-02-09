import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all accessories
export async function GET() {
  const accessories = await prisma.accessory.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(accessories);
}

// CREATE accessory
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const accessory = await prisma.accessory.create({
      data: {
        name: data.name,
        unit: data.unit,
        quantity: Number(data.quantity),
        pricePerUnit: data.pricePerUnit
          ? Number(data.pricePerUnit)
          : null,
        brand: data.brand || null,
        description: data.description || null,
      },
    });

    return NextResponse.json(accessory);
  } catch (error) {
    console.error("CREATE ACCESSORY ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create accessory" },
      { status: 500 }
    );
  }
}

// DELETE accessory
export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.accessory.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ success: true });
}
