import { prismaClient } from "@/app/lib/db";
import { NextRequest } from "next/server";

export function POST(req:NextRequest){

    prismaClient.brand.create({
        
    })

}