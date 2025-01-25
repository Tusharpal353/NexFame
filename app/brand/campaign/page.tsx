"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import React, { useState } from 'react';

const Campaign = () => {

  const [label, setLabel] = useState("")
  const [description, setDescription] = useState("")
  const [budget, setBudget] = useState(0)
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  
  const {data:session} = useSession()
  const email = session?.user?.email|| " "
  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(label, description, budget, dateFrom, dateTo, email)

    try{

      await axios.post("api/campaign", {
        label, description, budget, dateFrom, dateTo,email
      })
      alert(" campagin created successfully")
    }
    catch (error) {
      console.error("Error creating campaign:", error);
      alert("Failed to create the campaign. Please try again.");
    }
    
  }


  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md ">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Create Campaign</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Campaign Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter campaign name"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-gray-700 font-medium">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            placeholder="Enter campaign description"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Budget Field */}
        <div className="flex flex-col">
          <label htmlFor="budget" className="text-gray-700 font-medium">
            Budget
          </label>
          <input
            type="number"
            id="budget"
            placeholder="Enter budget"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setBudget(Number(e.target.value))}

          />
        </div>

        {/* Timeline Fields */}
        <div>
          <label className="text-gray-700 font-medium">Timeline</label>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex flex-col">
              <label htmlFor="from" className="text-gray-500 text-sm">
                From
              </label>
              <input
                type="date"
                id="from"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="to" className="text-gray-500 text-sm">
                To
              </label>
              <input
                type="date"
                id="to"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"

          onSubmit={() => handleSubmit}
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default Campaign;
