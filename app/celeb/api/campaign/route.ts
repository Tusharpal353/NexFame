import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const data = await prismaClient.campaigns.findMany()

    return NextResponse.json({
        data:data
    })
    
}