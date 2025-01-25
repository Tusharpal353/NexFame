


"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Clipboard, Clock2, IndianRupee, PlusIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';


const Dashboard = () => {

  const [campaign, setCampaign] = useState([])

  const { data: session} = useSession()
  

  const fetchCampaign = async () => {
    try {
      const response = await axios.get('api/campaign')
      console.log(response)
      setCampaign(Array.isArray(response.data)?response.data:[] )
      
    }
    catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    fetchCampaign()
  }, [])





  const router = useRouter()
  const createCampagin = () => {
    router.push("/brand/campaign")
  }

  return (
    <div className='bg-[#e5e7eb]  w-screen h-screen' >
      <div className=' p-4  '>
        <div className='text-3xl font-medium'>
          welcome back COMPANY NAME!,  {session?.user?.email}

        </div>

        <div className='text-xl '>
          here is what is happeining with your Campaign
        </div>
        <div className='grid grid-flow-col col-span-3'>

          <div className='bg-white p-6 rounded-xl shadow-xl m-6 text-lg font-semi-bold flex justify-start '>
            <Clipboard />
            active Campaign
            {campaign.length}
          </div>


          <div className='bg-white p-6 rounded-xl shadow-xl m-6 text-lg font-semi-bold flex'>
            <Clock2 />
            Pending Campaign
            5
          </div>
          <div className='bg-white p-6 rounded-xl shadow-xl m-6 text-lg font-semi-bold flex'>
            <IndianRupee />
            Total budget spent
            {campaign.budget}
          </div>
        </div>
        <div className=''>
          <button className='border  p-2 bg-blue-600 text-white rounded-lg shadow-xl' onClick={() => createCampagin()}><PlusIcon /> Createa a campagins</button>
        </div>
        <div className='p-4'>
          <button className='border-black border p-2 bg-white rounded-lg shadow-xl' onClick={() => router.push("searchcelebirity")}>Search celebirity</button>
        </div>


          <div>
            {campaign.length === 0 ? (
              <p>No campaigns available.</p>
            ) : (
              campaign.map((campaign) => (
                <li key={campaign.id}>
                  <h2>{campaign.name}</h2>
                  <p>{campaign.description}</p>
                  <p>Budget: ${campaign.budget}</p>
                  <p>Start Date: {new Date(campaign.sDate).toLocaleDateString()}</p>
                  <p>End Date: {new Date(campaign.eDate).toLocaleDateString()}</p>
                </li>
              ))
            )}
          </div>
        </div>

      </div>

  
  )
}

export default Dashboard
/* 
"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { Clipboard, Clock2, IndianRupee, PlusIcon, Search } from "lucide-react"
import { useSession } from "next-auth/react"

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([])
  const { data: session } = useSession()
  const router = useRouter()

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get("api/campaign")
      setCampaigns(Array.isArray(response.data) ? response.data : [])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCampaigns()
  }, [session]) // Added session to dependencies

  const createCampaign = () => {
    router.push("/brand/campaign")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, <span className="text-blue-600">{session?.user?.email || "COMPANY NAME"}</span>!
        </h1>
        <p className="text-xl text-gray-600 mb-8">Here's what's happening with your campaigns</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<Clipboard className="w-6 h-6" />} title="Active Campaigns" value={campaigns.length} />
          <StatCard icon={<Clock2 className="w-6 h-6" />} title="Pending Campaigns" value={5} />
          <StatCard icon={<IndianRupee className="w-6 h-6" />} title="Total Budget Spent" value="₹10,000" />
        </div>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={createCampaign}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Create a Campaign
          </button>
          <button
            onClick={() => router.push("searchcelebirity")}
            className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-50 transition duration-300"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Celebrity
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Your Campaigns</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {campaigns.length === 0 ? (
              <p className="px-6 py-4 text-gray-500">No campaigns available.</p>
            ) : (
              campaigns.map((campaign) => (
                <div key={campaign.id} className="px-6 py-4 hover:bg-gray-50 transition duration-300">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{campaign.name}</h3>
                  <p className="text-gray-600 mb-2">{campaign.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <p>Budget: ₹{campaign.budget}</p>
                    <p>Start: {new Date(campaign.sDate).toLocaleDateString()}</p>
                    <p>End: {new Date(campaign.eDate).toLocaleDateString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
    <div className="p-3 bg-blue-100 rounded-full">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
)

export default Dashboard

 */