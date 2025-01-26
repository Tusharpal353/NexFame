"use client";
import { useSession } from 'next-auth/react';
import React from 'react';
import raftar2 from "@/app/[lib]/images/raftar2.jpg";
import samayraina from "@/app/[lib]/images/samay raina.jpg";
import raftar from "@/app/[lib]/images/raftar.jpg";
import sedhemaut2 from "@/app/[lib]/images/sedhemaut2.jpg";
import king from "@/app/[lib]/images/king.jpg";
import seedhemaut from "@/app/[lib]/images/seedhemaut.jpg";
import Image from 'next/image';
const Dashtwo = () => {
  return (
    <div>
        {/* Red Section */}
        <div className=" h-screen bg-[#262626] text-white flex items-center justify-center ">
          <div className='flex w-[90%]      '>
            <div  className='max-w-lg border-white border'>
              <h1>WE SIT AT THE CENTER OF Culture</h1>
                <p>We serve as curators, champions and connectors to elevate the world's leading artists to global audiences.</p>
            </div>
            <div>
              <div className='flex'>
              <Image
                className="w-1/4 h-full object-cover m-4"
                src={samayraina}
                alt="Seedhe Maut"
              />
              <Image
                className="w-1/4 h-full object-cover m-4"
                src={samayraina}
                alt="Seedhe Maut"
              />
              
                
              </div>
              <div className='flex'>
              <Image
                className="w-1/4 h-full object-cover m-4"
                src={samayraina}
                alt="Seedhe Maut"
              /> <Image
              className="w-1/4 h-full object-cover m-4"
              src={samayraina}
              alt="Seedhe Maut"
            />
                
  
              </div>
              
  
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashtwo