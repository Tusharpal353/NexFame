"use client"
import { role } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React, { useState } from 'react'
import { z } from 'zod';

const signupSchema = z.object({
    celebName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    category:z.string(),
    role: z.literal("celeb")


})



const Signup = () => {

    const [celebName, setcelebName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const HandleSubmit = async () => {
        try {

            if (!celebName || !email || !password) {
                alert("fill something bitch")
                return ("The input fieds are empty")
            }
            const role = "celeb"

            const validateData = signupSchema.parse({ celebName, email, password ,category,role})
            setLoading(true)

            await axios.post('api/signup', {
                celebName, email, password,category,role
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
                    <span className='p-4'>Full Name</span>
                    <input className='border border-black' type="text" placeholder='email' onChange={(e) => setcelebName(e.target.value)} />
                </div>
                <div>
                    <span className='p-4'>Email</span>
                    <input className='border border-black' type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <span className='p-4'>Password</span>
                    <input className='border border-black' type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <span className='p-4'>category</span>
                    <select name="" id="" onChange={(e) => setCategory(e.target.value)} >
                        <option value="">Fintess</option>
                        <option value="">Fashion</option>
                        <option value="">Tech</option>
                        <option value="">Beauty</option>
                    </select>

                </div>


                <button className='bg-blue-500 text-white' onClick={() => HandleSubmit()}>Create account</button>

            </div>

        </div>
    )
}

export default Signup 