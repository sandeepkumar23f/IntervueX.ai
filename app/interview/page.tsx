"use client";

import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function InterviewPage() {
  const router = useRouter();

  const features = [
    {
      icon: "🎯",
      title: "Mock Interviews",
      desc: "Practice real interview questions with AI.",
    },
    {
      icon: "📊",
      title: "AI Feedback",
      desc: "Get detailed feedback and improvement suggestions.",
    },
    {
      icon: "💻",
      title: "Technical Rounds",
      desc: "Frontend, Backend, DSA and more.",
    },
    {
      icon: "🧑‍💼",
      title: "HR Interviews",
      desc: "Behavioral and communication practice.",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      desc: "Monitor your growth over time.",
    },
    {
      icon: "🎤",
      title: "Voice Interviews",
      desc: "Coming Soon.",
    },
  ];

  const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DSA",
    "Machine Learning",
    "Data Science",
    "DevOps",
    "System Design",
    "Mobile Development",
    "Cyber Security",
    "Cloud Engineering",
    "HR Interview",
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white">
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ace Your Next Interview 🚀
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Practice AI-powered mock interviews, receive personalized
            feedback, and improve your confidence before the real interview.
          </p>

          <button
            onClick={() => router.push("/chat")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Start Interview →
          </button>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You Can Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>

                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why InterviewX */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose InterviewX?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Personalized AI Interviewer",
              "Instant Performance Feedback",
              "Multiple Interview Domains",
              "Real-World Interview Experience",
              "Available Anytime",
              "Track Your Improvement",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* Interview Categories */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Interview Categories
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-blue-500 transition"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Coming Soon 🚀
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              📄 Resume-Based Interviews
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              🎤 Voice Interviews
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              🏢 Company-Specific Preparation
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start?
            </h2>

            <p className="text-lg text-gray-100 mb-8">
              Begin your interview preparation journey today with AI-powered
              mock interviews.
            </p>

            <button
              onClick={() => router.push("/chat")}
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Start Mock Interview →
            </button>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}