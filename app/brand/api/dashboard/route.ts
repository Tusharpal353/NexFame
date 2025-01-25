
import { prismaClient } from "@/app/lib/db";

import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const user = await prismaClient.brand.findFirst({
    where: {
      email: email,
    },
  });

  const id =user.id

  const camp = await prismaClient.campaigns.findMany({
    where: {
      id: id,
      status: "active",
    },
  });

  return NextResponse.json({
    message: "camp found",
    camp,
  });
}

/* 
export async function POST(res:NextResponse) {

    
} */