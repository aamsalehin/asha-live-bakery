import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all raw materials
export async function GET() {
  const materials = await prisma.rawMaterial.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(materials);
}

// CREATE raw material
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const material = await prisma.rawMaterial.create({
      data: {
        name: data.name,
        brand: data.brand,
        quantity: Number(data.quantity),
        unit: data.unit,
        price: data.price ? Number(data.price) : null,
      },
    });

    return NextResponse.json(material);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to add raw material" },
      { status: 500 }
    );
  }
}
