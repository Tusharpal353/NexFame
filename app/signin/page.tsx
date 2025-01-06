import React from 'react'

const signin = () => {
    return (
        <div className='p-20 border border-black m-20'>
            <div className='text-center'>
                <div>
                    <span className='p-4'>Email</span>
                    <input className='border border-black' type="text" placeholder='email' />
                </div>
                <div>
                    <span className='p-4'>Password</span>
                    <input className='border border-black' type="text" placeholder='password' />
                </div>
                <button className='bg-blue-500 text-white'>Submit</button>
                
            </div>
            
        </div>
    )
}

export default signin