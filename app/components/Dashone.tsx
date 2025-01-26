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
const Dashone = () => {
    const session = useSession();

    return (
      <div className="w-full h-screen">
        {/* Image Section with Overlay */}
        <div className="w-full h-screen relative bg-[#171717] p-3">
          {/* Images */}
          <div className="flex w-full h-5/6 ">
            <div className="w-1/3 h-full p-2">
              <Image
                className="w-full h-full object-cover"
                src={raftar2}
                alt="Samay Raina"
              />
            </div>
            <div className="w-1/3 h-full p-2">
              <Image
                className="w-full h-full object-cover"
                src={king}
                alt="King"
              />
            </div>
            <div className="w-1/3 h-full p-2">
              <Image
                className="w-full h-full object-cover"
                src={sedhemaut2}
                alt="Seedhe Maut"
              />
            </div>
          </div>
  
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-[#171717] bg-opacity-70"></div>
  
          {/* Heading */}
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center ">
            The Original Advocate For The World's Most Extraordinary Talent
  
            </h1>
            <p className='text-white text-xl md:text-xl font-bold text-center '>Enabling generations of artists and creators to achieve success, impact culture, and shape a better world.</p>
          </div>
        </div>
  
        
      </div>
    );
}

export default Dashone