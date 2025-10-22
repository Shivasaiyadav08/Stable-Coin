"use client";

import { useEffect, useState } from "react";
import { ReadContract } from "./components/ReadContract";
import { WriteContract } from "./components/WriteContract";
import { EventLogs } from "./components/EventLogs";
import { About } from "./components/About";
import { useAccount } from "wagmi";

export default function HomePage() {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevents SSR mismatch

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">

      {/* Read & Write Section */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl items-stretch justify-center">
        <div className="flex-1 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col">
          <ReadContract />
        </div>

        {isConnected && (
          <div className="flex-1 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col">
            <WriteContract />
          </div>
        )}
      </div>

      <div className="text-sm text-gray-500 mt-4">
        ⚠️ Note: All values displayed are in <strong>wei</strong>.
      </div>

      {/* Event Logs Section */}
      <div id="liveevents" className="w-full max-w-6xl mt-10">
        <h2 className="text-2xl text-black font-bold mb-4 text-center">Live Event Logs</h2>
        <EventLogs />
      </div>

      {/* About Section */}
      <div id="about" className="w-full max-w-6xl mb-20 mt-10">
        <About />
      </div>

    </div>
  );
}


