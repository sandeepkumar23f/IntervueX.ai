"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createInterview } from "@/lib/interview";

export default function CreateInterviewPage() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleStart = async () => {
    if (!role.trim()) return;

    try {
      setLoading(true);

      const data = await createInterview(role);

      router.push(`/chat/${data.interviewId}`);
    } catch (error) {
      console.error("Error creating interview:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center mb-4">
          What interview would you like to prepare for?
        </h1>

        <p className="text-zinc-400 text-center mb-10">
          Describe the role, company, or interview you want to practice.
        </p>

        <div className="bg-[#2f2f2f] border border-zinc-700 rounded-3xl p-3 flex items-center">
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleStart()}
            placeholder="Example: React Native Developer, Amazon SDE-1, TCS Ninja..."
            className="flex-1 bg-transparent outline-none px-4 py-4 text-lg"
          />

          <button
            onClick={handleStart}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl transition"
          >
            {loading ? "Starting..." : "Start"}
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {[
            "Frontend Developer",
            "Backend Developer",
            "React Native Developer",
            "Amazon SDE-1",
            "TCS Ninja",
            "DSA Interview",
          ].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setRole(suggestion)}
              className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-sm transition"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}