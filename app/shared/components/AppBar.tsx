"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const AppBar = () => {

    const session = useSession()
    const router = useRouter()
   
    console.log(session.data?.user?.email)
    return (
        <div className='bg-slate-500 py-4'>
            <div>


                {!session.data?.user && <button className=' bg-black text-white p-2 rounded-xl m-1'  onClick={() => signIn()}>
                    Signin
                </button> }
                {!session.data?.user && <button className=' bg-black text-white p-2 rounded-xl m-1'   onClick={() =>router.push('/signup') }>
                    SignUp
                </button> }
                {session.data?.user && <button onClick={() => signOut()}>
                    Logout
                </button> }
                
                
                
            </div>
        </div>
    )
}

export default AppBar