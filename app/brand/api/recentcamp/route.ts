/* import { prismaClient } from "@/app/lib/db";

import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest,res:NextResponse) {
  const { email } = await req.json();
console.log(email,"from backend")
  const user = await prismaClient.brand.findUnique({
    where: {
      email: email,
    },
  });
  console.log(user,"user from back")
  if (!user) {
    return NextResponse.json({ message: "User not found" });
  }

  const id =user?.id

  const camp = await prismaClient.campaigns.findMany({
    where: {
      brandId: id,
       status: "active",
    },
  });

  return NextResponse.json({
    message: "camp found",
    camp,
  });
} */
// Add support for GET requests
/* 
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    console.log("Received email:", email);

    const user = await prismaClient.brand.findUnique({
      where: {
        email: email,
      },
    });

    console.log("User fetched from DB:", user);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const id = user?.id;

    const camp = await prismaClient.campaigns.findMany({
      where: {
        brandId: id,
        status: "active",
      },
    });

    console.log("Campaigns found:", camp);

    return NextResponse.json({
      message: "camp found",
      camp,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
} */

/* 
export async function GET(req: NextRequest) {
  const camp = await prismaClient.campaigns.findMany({
    where: {
      status: "active",
    },
  });

  return NextResponse.json({
    message: "All active campaigns found",
    camp,
  });
}

 */
