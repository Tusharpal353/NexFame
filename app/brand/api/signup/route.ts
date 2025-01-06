import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface brandData {
  brandName: string;
  email: string;
  password: string;
  role:"Brand"
}

export async function POST(req: NextRequest) {
  try {
    const data: brandData = await req.json();
    console.log(data);

    const { brandName, email, password,role } = data;
    const existingBrand = await prismaClient.brand.findFirst({
      where: {
        email: email,
      },
    });

    if (existingBrand) {
      return NextResponse.json(
        {
          message: "email already exists",
        },
        {
          status: 409,
        }
      );
    }

    const newUser = await prismaClient.brand.create({
      data: {
        name: brandName,
        email:email,
        password:password,
        role:role   
        
      },
    });

    return NextResponse.json(
      { newUser, message: "user created successfully" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 404 });
  }
}
