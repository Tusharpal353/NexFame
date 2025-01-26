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
import Dashone from './Dashone';
import Dashtwo from './Dashtwo';

const Dashboard = () => {
  const session = useSession();

  return (
    <div className="w-full h-screen">
      {/* Image Section with Overlay */}
      <Dashone/>

     <Dashtwo/>
    </div>
  );
};

export default Dashboard;
