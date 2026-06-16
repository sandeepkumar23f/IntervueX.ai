"use client";

import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6">

      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
        <Sparkles size={28} />
      </div>

      <h1 className="text-4xl font-bold text-center">
        Welcome to InterviewX
      </h1>

      <p className="text-zinc-500 text-center mt-4 max-w-xl">
        Start a mock interview and receive
        personalized feedback powered by AI.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-2xl">

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          🎯 Frontend Interview
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          💻 DSA Practice
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          🧑‍💼 HR Round
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          🚀 Custom Interview
        </div>

      </div>

    </div>
  );
}