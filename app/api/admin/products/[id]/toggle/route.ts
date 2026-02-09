import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { type } = await _.json();

  const product = await prisma.product.update({
    where: { id: params.id },
    data: {
      featuredProduct: type === "featured"
        ? { set: true }
        : undefined,
      productOfTheDay: type === "pod"
        ? { set: true }
        : undefined,
    },
  });

  return NextResponse.json(product);
}
