import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* =========================
   GET: all products
========================= */
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

/* =========================
   POST: create product
========================= */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.price || !data.unit || !data.categoryId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name: data.name,
        price: Number(data.price),              // ✅ ensure number
        unit: data.unit,
        image: data.image || null,
        description: data.description || null,
        ingredients: Array.isArray(data.ingredients)
          ? data.ingredients
          : [],
        categoryId: Number(data.categoryId),    // ✅ FIX (was string)
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

/* =========================
   PATCH: update product
   (featured / POD / edit)
========================= */
export async function PATCH(req: Request) {
  try {
    const data = await req.json();

    if (!data.id) {
      return NextResponse.json(
        { error: "Product id required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.update({
      where: { id: Number(data.id) },
      data: {
        ...data,
        id: undefined, // ❌ never update id
        price: data.price !== undefined ? Number(data.price) : undefined,
        categoryId:
          data.categoryId !== undefined
            ? Number(data.categoryId)
            : undefined,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("UPDATE PRODUCT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE: remove product
========================= */
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Product id required" },
        { status: 400 }
      );
    }

    await prisma.product.delete({
      where: { id: Number(id) }, // ✅ ensure number
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
