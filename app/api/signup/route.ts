/* import { prismaClient } from "@/app/lib/db";
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
 */
import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface UserData {
  name: string;
  email: string;
  password: string;
  role: "celebrity" | "brand"; // Include 'celebrity' role here
}

export async function POST(req: NextRequest) {
  try {
    const data: UserData = await req.json();

    const { name, email, password, role } = data;

    // Check if user already exists
    const existingUser = await prismaClient.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }

    // Create new user (brand or celebrity)
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
        role, // Store the role ('celebrity' or 'brand')
      },
    });

    return NextResponse.json(
      { newUser, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
