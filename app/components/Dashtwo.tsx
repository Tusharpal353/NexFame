"use client"

import React from "react"
import Image from "next/image"
import rebelkid from "@/app/[lib]/images/rebel id.jpg"
import samayraina from "@/app/[lib]/images/samay raina.jpg"
import raftar from "@/app/[lib]/images/raftar.jpg"
import sedhemaut2 from "@/app/[lib]/images/sedhemaut2.jpg"
import king from "@/app/[lib]/images/king.jpg"
import seedhemaut from "@/app/[lib]/images/seedhemaut.jpg"

const Dashtwo = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 py-16 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              WE SIT AT THE CENTER OF <span className="text-red-500">CULTURE</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
              We serve as curators, champions and connectors to elevate the world's leading artists to global audiences.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              { src: rebelkid, alt: "rebel kid" },
              { src: raftar, alt: "Raftar" },
              { src: sedhemaut2, alt: "Seedhe Maut" },
              { src: king, alt: "King" },
            ].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={500}
                  height={500}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-4">
                  <h3 className="text-white text-lg font-semibold">{img.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashtwo

