import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  const { name } = await req.json();

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  const category = await prisma.category.create({
    data: { name, slug },
  });

  return NextResponse.json(category);
}
