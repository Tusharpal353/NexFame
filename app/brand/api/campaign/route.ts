import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";





export async function POST(req:NextRequest) {
  
    try {
        const { label,description,budget,dateFrom,dateTo ,brandId} = await req.json();
        
        if (!label || !description || !budget || !dateFrom || !dateTo || !brandId) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        const parsedBudget = parseInt(budget, 10);
        const parsedDateFrom = new Date(dateFrom)
        const parsedDateTo = new Date(dateTo)
        console.log(label,description,budget,parsedDateFrom,parsedDateTo,brandId)
     const Campaign =await prismaClient.campaigns.create(
    {
    
        data:{
            name:label,
            description:description,
            budget: parsedBudget,
            sDate:parsedDateFrom,
            eDate:parsedDateTo,
            role:"Brand",
            brand:{
                connect:{id:brandId}
            }
            
        }
        
    }
     )
     return NextResponse.json({
        Campaign,
        message:"created successfuly"
    })

        
    } catch (error) {
      

        
        return NextResponse.json({error,message:"error while sending"})
        
    }
  
   
    
}