import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const id = Number(body?.id);
    const field = body?.field as "featuredProduct" | "productOfTheDay";

    if (!id || !field || (field !== "featuredProduct" && field !== "productOfTheDay")) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // get current value
    const current = await prisma.product.findUnique({
      where: { id },
      select: { featuredProduct: true, productOfTheDay: true },
    });

    if (!current) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const nextValue = !current[field];

    const updated = await prisma.product.update({
      where: { id },
      data: { [field]: nextValue },
      select: {
        id: true,
        featuredProduct: true,
        productOfTheDay: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("TOGGLE PRODUCT ERROR:", error);
    return NextResponse.json({ error: "Failed to toggle" }, { status: 500 });
  }
}
