"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Campaign = () => {
  const { data: session, status } = useSession();
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState<number>(0);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [brandEmail, setBrandEmail] = useState("");

  // Set the brand email when the user session is authenticated
  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setBrandEmail(session.user.email);
      console.log(session.user.email); // Debugging email logging
    } else if (status !== "loading") {
      console.warn("Session is not authenticated or email is missing");
    }
  }, [session, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!label || !description || !budget || !dateFrom || !dateTo || !brandEmail) {
      console.error("All fields are required");
      return alert("Please fill all the required fields.");
    }

    try {
      const response = await axios.post("api/campaign", {
        label,
        description,
        budget,
        dateFrom,
        dateTo,
        brandEmail,
      });
      console.log(response.data);
      alert("Campaign created successfully!");
    } catch (error) {
      console.error("Error in creating campaign:", error);
      alert("Failed to create campaign. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Create Campaign</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Campaign Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Campaign Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter campaign name"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            required
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-gray-700 font-medium">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Enter campaign description"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
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
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            required
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
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                required
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
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default Campaign;
