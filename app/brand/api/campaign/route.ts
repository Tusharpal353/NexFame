import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { label, description, budget, dateFrom, dateTo, brandEmail } = await req.json();

    if (!label || !description || !budget || !dateFrom || !dateTo || !brandEmail) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const brandCid = await prismaClient.brand.findFirst({
      where: {
        email: brandEmail,
      },
    });

    if (!brandCid) {
      return NextResponse.json(
        { message: "Brand not found with the given email" },
        { status: 404 }
      );
    }

    const parsedBudget = parseInt(budget, 10);
    const parsedDateFrom = new Date(dateFrom);
    const parsedDateTo = new Date(dateTo);

    const campaign = await prismaClient.campaigns.create({
      data: {
        name: label,
        description,
        budget: parsedBudget,
        sDate: parsedDateFrom,
        eDate: parsedDateTo,
        role: "Brand",
        brand: {
          connect: { id: brandCid.id },
        },
      },
    });

    return NextResponse.json({
      campaign,
      message: "Campaign created successfully",
    });
  } catch (error) {
    console.error("Error in campaign creation:", error);
    return NextResponse.json(
      { message: "Error while creating campaign", error },
      { status: 500 }
    );
  }
}
