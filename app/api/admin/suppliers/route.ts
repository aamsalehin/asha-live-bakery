import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* =====================================================
   GET → List all suppliers
===================================================== */
export async function GET() {
  try {
    const suppliers = await prisma.supplier.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(suppliers);
  } catch (error) {
    console.error("GET SUPPLIERS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch suppliers" },
      { status: 500 }
    );
  }
}

/* =====================================================
   POST → Create supplier
===================================================== */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, address } = body;

    if (!name || !phone || !address) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const supplier = await prisma.supplier.create({
      data: {
        name,
        phone,
        address,
      },
    });

    return NextResponse.json(supplier, { status: 201 });
  } catch (error) {
    console.error("CREATE SUPPLIER ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create supplier" },
      { status: 500 }
    );
  }
}

/* =====================================================
   DELETE → Delete supplier
===================================================== */
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Supplier id is required" },
        { status: 400 }
      );
    }

    await prisma.supplier.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE SUPPLIER ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete supplier" },
      { status: 500 }
    );
  }
}
