import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET employees
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const branchId = searchParams.get("branchId");

  const employees = await prisma.employee.findMany({
    where: branchId ? { branchId: Number(branchId) } : {},
    include: { branch: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(employees);
}

// CREATE employee
export async function POST(req: Request) {
  const data = await req.json();

  const employee = await prisma.employee.create({
    data: {
      name: data.name,
      image: data.image,
      phone: data.phone,
      email: data.email,
      address: data.address,
      salary: Number(data.salary),

      bankName: data.bankName,
      branchName: data.branchName,
      accountName: data.accountName,
      accountNumber: data.accountNumber,

      education: data.education,
      notes: data.notes,

      branchId: Number(data.branchId),
    },
  });

  return NextResponse.json(employee);
}

// DELETE employee
export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.employee.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ success: true });
}
