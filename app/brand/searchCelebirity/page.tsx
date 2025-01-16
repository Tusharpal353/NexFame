"use client"
import axios from 'axios'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const SearchCelebirity = () => {
    
    const [celebs, setCelebs] = useState([])
    const [searchCeleb,setsearchCeleb]=useState("")

    const fetchCelebs = async () => {

        const response = await axios.get("api/searchcelebs")
        setCelebs(response.data.celebs)
        console.log(response.data.celebs)


    }

    useEffect(() => {
        fetchCelebs()
    }, [])


const handleSearchSubmit =async ()=>{
    console.log(searchCeleb)
    
 const response = await   axios.post("api/searchcelebs", {celebName: searchCeleb})
 if(response.data.searchResult){
    console.log("celeb found",response.data.searchResult)
    setCelebs([response.data.searchResult]);
 }else{
    console.log("no celeb found")
 }

}   
    return (
        <div>
            <div className='flex bg-[#f4f4f5] w-full justify-center'>
                <div className='  text-center'>
                    <h1 className='p-4 text-2xl font-bold'>Find the perfect celebrity for your brand</h1>
                    <div className='flex '>
                    <input  type="text" onChange={(e)=>{setsearchCeleb(e.target.value)}} className='border border-black m-4 py-2 px-8' />
                    <button className='bg-blue-500 m-4 p-4' onClick={()=>handleSearchSubmit()}><Search /></button>
                    <div className=' m-4'>
                        <label htmlFor=""></label>
                        <select name="" id="">
                            <option value="All categories">All categories</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Fitnes">Fitnes</option>
                            <option value="lifestyle">lifestyle</option>
                            <option value="sports">sports</option>
                            <option value="Tech">Tech</option>
                        </select>
                    </div>
                    <div className='m-4'>
                        <select name="" id="">
                            <option value="All">Followers</option>
                            <option value="All">All</option>
                            <option value="1m+">1m+</option>
                            <option value="500K-1M">500K-1M</option>
                            <option value="100k-500k">100k-500k</option>
                            <option value="50k-100k">50k-100k</option>
                        </select>
                    </div>
                </div>
                </div>
  
            </div>
            <div className=' grid  grid-cols-2 items-center '>

                {
                    celebs.length > 0 ?
                        (
                            celebs.map((celeb, index) => (
                                <div  key={index} className=" col-span-1 border border-black w-fit px-8 py-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition  m-6" >
                                    <h1 className="text-lg font-semibold text-gray-800">{celeb.name}</h1>
                                    <h1 className="text-sm text-gray-600 italic">{celeb.email}</h1>
                                    <button className='border border-black p-1 px-2 m-1 bg-slate-600 rounded-xl text-white'>Invite</button>
                                </div>
                            ))

                        ) : (
                            <p>loading     </p>
                        )
                }



            </div>

        </div>
    )
}

export default SearchCelebirity

