"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
  const session = useSession()
  return (
    <div className='bg-slate-950 w-full h-screen'>
        <div className='text-white text-center'>
            This is the dashboard
      <div className='text-white'>{  (JSON.stringify(session))}</div>
        </div>
    </div>
  )
}

export default Dashboard
/* "use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (session.user.role === "Brand") {
        // Redirect to brand dashboard
        router.push("/brand/dashboard");
      } else if (session.user.role === "celeb") {
        // Redirect to celebrity dashboard
        router.push("/celeb/dashboard");
      }
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>Redirecting...</div>;
};

export default Dashboard;
 */