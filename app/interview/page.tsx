"use client";

import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function InterviewPage() {
  const router = useRouter();

  const roles = [
    { title: "Frontend Developer", desc: "React, JS, UI challenges" },
    { title: "Backend Developer", desc: "APIs, DB, system logic" },
    { title: "Full Stack Developer", desc: "Frontend + Backend combined" },
    { title: "DSA", desc: "Problem solving & coding rounds" },
    { title: "Machine Learning", desc: "ML concepts & case studies" },
    { title: "Data Science", desc: "Data analysis & stats" },
    { title: "DevOps Engineer", desc: "CI/CD, Docker, deployment" },
    { title: "System Design", desc: "Scalable architecture" },
    { title: "Mobile App Developer", desc: "Android / iOS basics" },
    { title: "Cyber Security", desc: "Security fundamentals" },
    { title: "Cloud Engineer", desc: "AWS, Azure, infra" },
    { title: "HR Interview", desc: "Behavioral & HR questions" },
  ];

  const handleStart = (role: string) => {
    localStorage.setItem("role", role);
    router.push("/chat");
  };

  const handleCustom = () => {
    localStorage.setItem("role", "custom");
    router.push("/chat");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white p-10">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4">
          Tell me what should we start with?
        </h1>
        <p className="text-gray-400 mb-8">
          You can choose a path or let AI guide you.
        </p>

        {/* 🔥 Custom AI Start (TOP PRIORITY) */}
        <div className="mb-10">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              Not sure where to begin?
            </h2>
            <p className="text-sm text-gray-200 mb-4">
              Let AI ask you questions and decide the best path for you.
            </p>

            <button
              onClick={handleCustom}
              className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200"
            >
              Start Custom →
            </button>
          </div>
        </div>

        {/* 🔥 Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-400 text-sm">OR CHOOSE A ROLE</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 🔥 Roles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition"
            >
              <h2 className="text-lg font-semibold">{role.title}</h2>
              <p className="text-gray-400 mt-2 text-sm">{role.desc}</p>

              <button
                onClick={() => handleStart(role.title)}
                className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                Start →
              </button>
            </div>
          ))}
        </div>

      </div>
    </ProtectedRoute>
  );
}