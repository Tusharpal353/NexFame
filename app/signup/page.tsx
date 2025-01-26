/* "use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React, { useState } from 'react'
import { z } from 'zod';

const signupSchema = z.object({
    brandName: z.string(),
    email: z.string().email(),
    password: z.string().min(8)


})



const Signup = () => {

    const [brandName, setBrandName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const HandleSubmit = async () => {
        try {

            if (!brandName || !email || !password) {
                alert("fill something bitch")
                return ("The input fieds are empty")
            }


            const validateData = signupSchema.parse({ brandName, email, password })
            setLoading(true)

            await axios.post('/api/signup', {
                brandName, email, password
            })
            console.log("data sent")
            router.push("/signin")
        } catch (err) {
            setLoading(false)
            NextResponse.json({
                message: "error in sending the brand details"
            })
            console.log(err)
        }
    }
    return (
        <div className='p-20 border border-black m-20'>
            <div className='text-center'>
                <div>
                    <span className='p-4'>Brand Name</span>
                    <input className='border border-black' type="text" placeholder='email' onChange={(e) => setBrandName(e.target.value)} />
                </div>
                <div>
                    <span className='p-4'>Email</span>
                    <input className='border border-black' type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <span className='p-4'>Password</span>
                    <input className='border border-black' type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='bg-blue-500 text-white' onClick={() => HandleSubmit()}>Create account</button>

            </div>

        </div>
    )
}

export default Signup */


/* current use below */
/* 
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Signup = () => {
    const router = useRouter()
  return (
    <div className='flex justify-center'>
        <div>
            <button className='bg-black text-white rounded-xl p-4'
            onClick={()=>router.push("/celeb/signup")}
            >signup as Celeb</button>
        </div>
        <div>
            <button className='bg-black text-white rounded-xl p-4' onClick={()=>router.push("/brand/signup")}>signup as Brand</button>
        </div>
    </div>
  )
}

export default Signup */

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HeroHighlightDemo } from "../components/Background";

const Signup = () => {
  const [role, setRole] = useState<"celeb" | "brand" | null>(null);
  const router = useRouter();

 

  return (
    <div>
      <HeroHighlightDemo/>

      {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <p className="text-lg mb-6">
          Choose your role to proceed with the signup process.
        </p>
        <div className="flex gap-6">
          <button
            className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={handleClientSignup}
          >
            Sign up as Celebrity
          </button>
          <button
            className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={handleBrandSignup}
          >
            Sign up as Brand
          </button>
        </div>
        {role && (
          <p className="mt-4 text-sm italic">
            You selected: <span className="font-bold">{role}</span>
          </p>
        )}
      </div> */}
    </div>
  );
};

export default Signup;
