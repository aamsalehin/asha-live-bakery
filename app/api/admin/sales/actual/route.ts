import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* ================= GET ================= */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    const where: any = {};
    if (date) where.date = new Date(date);

    const data = await prisma.actualSalesDay.findMany({
      where,
      include: {
        branch: true,
      },
      orderBy: { date: "desc" },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("GET ACTUAL SALES ERROR:", error);
    return NextResponse.json([], { status: 500 });
  }
}

/* ================= POST ================= */
export async function POST(req: Request) {
  try {
    const { date, branchId, amount } = await req.json();

    if (!date || !branchId || amount === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const record = await prisma.actualSalesDay.upsert({
      where: {
        date_branchId: {
          date: new Date(date),
          branchId: Number(branchId),
        },
      },
      update: {
        amount: Number(amount),
      },
      create: {
        date: new Date(date),
        branchId: Number(branchId),
        amount: Number(amount),
      },
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error("SAVE ACTUAL SALES ERROR:", error);
    return NextResponse.json(
      { error: "Failed to save actual sales" },
      { status: 500 }
    );
  }
}
