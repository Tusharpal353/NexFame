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
"use client"

import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleBrandSignup = () => {
    router.push("/brand/signup")
  }

  const handleCelebritySignup = () => {
    router.push("/client/signup")
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col sm:flex-row">
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-800"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <button
            onClick={handleBrandSignup}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Sign in as Brand
          </button>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-800"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <button
            onClick={handleCelebritySignup}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Sign in as Celebrity
          </button>
        </div>
      </div>
    </div>
  )
}

