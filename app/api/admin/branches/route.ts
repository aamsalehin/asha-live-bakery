import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

/* ================================================== */
/* GET: Fetch all branches */
/* ================================================== */
export async function GET() {
  try {
    const branches = await prisma.branch.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(branches);
  } catch (error) {
    console.error("GET BRANCHES ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch branches" },
      { status: 500 }
    );
  }
}

/* ================================================== */
/* POST: Create new branch */
/* ================================================== */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, managerName, address, description } = body;

    // ✅ Basic validation
    if (!name || !phone || !managerName || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const branch = await prisma.branch.create({
      data: {
        name,
        phone,
        managerName,
        address,
        description,
      },
    });

    return NextResponse.json(branch, { status: 201 });
  } catch (error: any) {
    console.error("CREATE BRANCH ERROR:", error);

    // Unique name error
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Branch name already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create branch" },
      { status: 500 }
    );
  }
}
