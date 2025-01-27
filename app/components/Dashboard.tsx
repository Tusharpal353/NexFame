"use client";
import { useSession } from 'next-auth/react';
import React from 'react';

import Dashone from './Dashone';
import Dashtwo from './Dashtwo';
import { HeroHighlight } from './ui/hero-highlight';
import { HeroHighlightDemo } from './Background';
import { AnimatedTestimonialsDemo } from './Dashthree';
import { InfiniteMovingCardsDemo, SparklesPreview } from './ui/DashFour';
import { Spotlight } from './ui/Spotlight';
import { SpotlightPreview } from './Dashfour';

const Dashboard = () => {
  const session = useSession();

  return (
    <div className="w-full h-screen">
      {/* Image Section with Overlay */}
      <Dashone/>
      <Dashtwo/>
      <AnimatedTestimonialsDemo  />
     <InfiniteMovingCardsDemo/>
    {/*   <SpotlightPreview/> */}
    </div>
  );
};

export default Dashboard;
