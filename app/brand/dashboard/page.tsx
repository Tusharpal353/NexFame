"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Clipboard, Clock2, IndianRupee, PlusIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

const Dashboard = () => {
  const [recentCamp, setRecentCamp] = useState([]);

  const session = useSession();

  const email = session?.data?.user?.email;
  console.log(email, "from the session ");

  const fetchRecectCamp = async () => {
    try {
      // Send email in a POST request
      const postResponse = await axios.post("api/recentcamp", { email });
      console.log("Email sent:", postResponse.data);
  
      // Fetch the recent campaigns after email is sent
      const response = await axios.get("api/recentcamp");
      console.log("Response on the frontend:", response);
  
      // Set the data to the state
      setRecentCamp(response.data.camp);
    } catch (error) {
      console.error("Error fetching recent campaigns:", error);
    }
  };
  

  useEffect(() => {
    fetchRecectCamp();
  }, [session]);

  const router = useRouter();
  const createCampagin = () => {
    router.push("/brand/campaign");
  };

  return (
    <div className="bg-[#e5e7eb]  w-screen h-screen">
      <div className=" p-4  ">
        <div className="text-3xl font-medium">welcome back COMPANY NAME!,</div>
        <div>
          <h1>{JSON.stringify(session)}</h1>
        </div>
        <div onClick={() => signIn()}>Signin</div>
        <div className="text-xl ">
          here is what is happeining with your Campaign
        </div>
        <div className="grid grid-flow-col col-span-3">
          <div className="bg-white p-6 rounded-xl shadow-xl m-6 text-lg font-semi-bold flex justify-start ">
            <Clipboard />
            active Campaign 8
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl m-6 text-lg font-semi-bold flex">
            <Clock2 />
            Pending Campaign 5
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl m-6 text-lg font-semi-bold flex">
            <IndianRupee />
            Total budget spent 10
          </div>
        </div>
        <div className="flex">
          <div className="">
            <button
              className="border  p-2 bg-blue-600 text-white rounded-lg shadow-xl"
              onClick={() => createCampagin()}
            >
              <PlusIcon /> Createa a campagins
            </button>
          </div>
          <div className="p-4">
            <button
              className="border-black border p-2 bg-white rounded-lg shadow-xl"
              onClick={() => router.push("searchcelebirity")}
            >
              Search celebirity
            </button>
          </div>
        </div>

        {/* recent campagains */}
        <div className="border border-black">
          <h1>Recent Campaign</h1>
          <div>
            {recentCamp.length > 0 ? (
              recentCamp.map((camp, index) => (
                <div key={index}>
                  <h2>{camp.name}</h2>
                  <h2>{camp.status}</h2>
                </div>
              ))
            ) : (
              <p>no recent camp</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
