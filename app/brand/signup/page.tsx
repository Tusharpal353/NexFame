 "use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React, { useState } from 'react'
import { z } from 'zod';

const signupSchema = z.object({
    brandName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.literal("Brand")

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
            const role = "Brand";
            

            const validateData = signupSchema.parse({ brandName, email, password,role })
            setLoading(true)

            await axios.post('api/signup', {
                brandName, email, password,role
            })
            console.log("data sent")
            router.push("api/auth/signin")
        } catch (err) {
            setLoading(false)
            NextResponse.json({
                message: "error in sending the brand details"
            })
            console.log(err)
        }
    }
    return (
        <div className='p-20 border border-black m-20 bg-purple-300 rounded-3xl'>
            <div className=' text-center'>
     
                <div className='flex flex-row justify-center  items-center'>
                    <span className='p-4 font-bold text-xl'>Brand Name</span>
                    <input className='border border-black p-2 rounded-xl' type="text" placeholder='Enter your name' onChange={(e) => setBrandName(e.target.value)} />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <span className='p-4 font-bold text-xl '>Email</span>
                    <input className='border border-black rounded-xl p-2' type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <span className='p-4 font-bold text-xl  '>Password</span>
                    <input className='border border-black rounded-xl p-2' type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='bg-blue-500 text-white p-2 rounded-xl ' onClick={() => HandleSubmit()}>Create account</button>

            </div>

        </div>
    )
}

export default Signup            

