"use client";
import { useSession } from 'next-auth/react';
import React from 'react';

import Dashone from './Dashone';
import Dashtwo from './Dashtwo';
import { HeroHighlight } from './ui/hero-highlight';
import { HeroHighlightDemo } from './Background';

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
