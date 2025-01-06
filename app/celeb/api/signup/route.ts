import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { role } from '@prisma/client';

export async function POST(req:NextRequest){
    const {celebName, email, password,category,role}=await req.json()

    await prismaClient.celeb.create({
        data:{
            name:celebName,
            email:email,
            password:password,
            category:category,
            role:role
        }
    })
    return NextResponse.json({
        celebName, email, password,category,
        message: "campaign successfully",
    })

}