"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Campaign = () => {
    const [campaign, setCampaign] = useState([])

    const fetchCampaign = async () => {
        const camp = await axios.get('api/campaign')
        console.log(camp.data.data)
        setCampaign(camp.data.data)
    }



    useEffect(() => {

        fetchCampaign()
    }, [])


    return (
        <div>
            all the campaigns
          {
            campaign.map((camp)=>(
                <div key={camp.id} className='border border-black m-2'>
                    <h1>Name :{camp.name}</h1>
                    <h1> Description: {camp.description}</h1>
                    <h1> Budget : {camp.budget}</h1>
                    <h1> Start Date : {camp.sDate}</h1>
                    <h1> End Date : {camp.eDate}</h1>
                    <h1>Status : {camp.status}</h1>

                    <button className='bg-blue-400 text-white rounded-xl p-2 m-1'>Apply</button>
                </div>
            ))
          }


        </div>
    )
}

export default Campaign