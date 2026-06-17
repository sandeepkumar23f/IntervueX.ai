"use client";

import { Plus, MessageSquare, User, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const recentInterviews = [
    {
      id: 1,
      title: "Frontend Developer",
    },
    {
      id: 2,
      title: "DSA Mock Interview",
    },
    {
      id: 3,
      title: "HR Interview",
    },
    {
      id: 4,
      title: "Backend Developer",
    },
  ];

  return (
    <aside className="w-72 bg-[#171717] border-r border-zinc-800 flex flex-col">

      {/* Logo */}
      <div className="p-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold text-white">
          InterviewX
        </h1>

        <p className="text-sm text-zinc-500">
          AI Interview Assistant
        </p>
      </div>

      {/* New Interview */}
      <div className="p-4">
        <button
          onClick={() => router.push("/interview/create")}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          New Interview
        </button>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto px-3">

        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3 px-2">
          Recent Interviews
        </p>

        <div className="space-y-1">

          {recentInterviews.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-zinc-800 transition"
            >
              <MessageSquare size={16} />

              <span className="truncate">
                {item.title}
              </span>
            </button>
          ))}

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-4">

        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 transition">
          <Settings size={18} />
          Settings
        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 transition mt-2">
          <User size={18} />

          <div className="text-left">
            <p className="text-sm font-medium">
              Sandeep
            </p>

            <p className="text-xs text-zinc-500">
              Free Plan
            </p>
          </div>
        </button>

      </div>

    </aside>
  );
}