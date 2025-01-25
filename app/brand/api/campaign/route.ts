import { prismaClient } from "@/app/lib/db";

import { NextRequest, NextResponse } from "next/server";
import { AuthOptions } from "next-auth";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  try {
    const { label, description, budget, dateFrom, dateTo, email } =
      await req.json();
    if (!label || !description || !budget || !dateFrom || !dateTo || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const parsedBudget = parseInt(budget, 10);
    const parsedDateFrom = new Date(dateFrom);
    const parsedDateTo = new Date(dateTo);

    const getbrandId = await prismaClient.brand.findUnique({
      where: {
        email: email,
      },
    });

    if (!getbrandId) {
        return NextResponse.json(
          { message: "Brand not found for the provided email" },
          { status: 404 }
        );
      }

    const brandId = getbrandId.id;

    console.log(
      label,
      description,
      budget,
      parsedDateFrom,
      parsedDateTo,
      brandId
    );
    const Campaign = await prismaClient.campaigns.create({
      data: {
        name: label,
        description: description,
        budget: parsedBudget,
        sDate: parsedDateFrom,
        eDate: parsedDateTo,
        role: "Brand",
        brand: {
          connect: { id: brandId },
        },
      },
    });
    return NextResponse.json({
      Campaign,
      message: "created successfuly",
    });
  } catch (error) {
    return NextResponse.json({ error, message: "error while sending" });
  }
}

export async function GET(req:NextRequest) {
    
    try {
            const session = await getServerSession()
            const email = session?.user?.email
            console.log(email,"email")

            if(!email){
                return NextResponse.json({
                message:"user is not authenticated"
            });
        }
            const brand = await prismaClient.brand.findUnique({
                where:{
                    email:email
                }
            })

            const brandId = brand.id
            console.log(brandId)
        
            const campaigns =await prismaClient.campaigns.findMany({
                where:{
                    brandId:brandId
                },
                
            })
            console.log(campaigns)

            if(campaigns.length === 0 ){

                return NextResponse.json({
                    message:"no campaign is created by you"
                })

            }

            return NextResponse.json(campaigns)
        
    } catch (error) {
        console.log(error)
        
    }
}
