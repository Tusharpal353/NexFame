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
        <div className="w-full h-screen relative bg-black p-3">
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
          <div className="absolute inset-0 bg-[#0A0A0A] bg-opacity-70"></div>
  
          {/* Heading */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4">
  <h1 className="text-white text-5xl md:text-7xl font-bold leading">
    NexFame
  </h1>
  <h2 className="text-white text-xl md:text-5xl font-semibold leading-snug">
    A place to take your product Next level with Fame
  </h2>
  <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl">
    Enabling generations of artists and creators to achieve success, impact culture, and shape a better world.
  </p>
</div>

        </div>
  
        
      </div>
    );
}

export default Dashone