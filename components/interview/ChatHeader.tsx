"use client";

import { PhoneOff } from "lucide-react";

type Props = {
  role: string;
};

export default function ChatHeader({ role }: Props) {
  return (
    <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 bg-[#171717]">

      <div>
        <h1 className="font-semibold text-lg text-white">
          {role || "InterviewX AI"}
        </h1>

        <p className="text-sm text-zinc-500">
          AI Interview Session
        </p>
      </div>

      <button
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
      >
        <PhoneOff size={16} />
        End Interview
      </button>

    </div>
  );
}