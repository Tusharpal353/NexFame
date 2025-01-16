import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    

    const celebs =await prismaClient.celeb.findMany()
    return NextResponse.json({
        celebs:JSON.parse(JSON.stringify(celebs)),
        message:"celebs fetched"
    })

    
}   

export async function POST(req:NextRequest) {
    
    const {celebName}=await req.json()
    console.log(celebName,"name of celeb")

   const searchResult =await prismaClient.celeb.findFirst({
    where:{
        name:celebName
    }
   })
   if(!searchResult){
    return NextResponse.json({
        message:"user not found"
    })
   }



    return NextResponse.json({
        message:"name of the celeb",
        searchResult
    })
    

}