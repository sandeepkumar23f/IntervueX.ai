import Navbar from "@/components/Navbar";
import StartButton from "@/components/StartButton";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-20 py-20">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Crack Interviews with{" "}
          <span className="text-blue-500">AI-Powered Practice</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Practice role-based interview questions, get instant feedback,
          and simulate real interviews with AI.
        </p>

        <div className="mt-8 flex gap-4">
          <StartButton />

          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Try Demo
          </button>
        </div>

      </section>

      {/* ROLES */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Choose Your Interview Track
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "DSA Preparation",
            "UI/UX Designer",
            "CS Fundamentals"
          ].map((role, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition cursor-pointer border border-gray-800 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-2">{role}</h3>

              <p className="text-gray-400 text-sm mb-4">
                Practice curated questions and mock interviews
              </p>

              <button className="text-blue-500 hover:underline">
                Start →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 MODES SECTION */}
      <section className="px-6 md:px-20 py-16">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Choose Your Practice Mode
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              title: "Frontend",
              desc: "React, JS, UI questions & scenarios"
            },
            {
              title: "Backend",
              desc: "APIs, DB, system design basics"
            },
            {
              title: "Full Stack",
              desc: "End-to-end project & architecture"
            },
            {
              title: "Custom Mode 🚀",
              desc: "Just start talking — AI will adapt to you"
            }
          ].map((mode, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-xl transition cursor-pointer border 
                ${mode.title.includes("Custom")
                  ? "border-blue-500 shadow-lg shadow-blue-500/10"
                  : "border-gray-800 hover:border-blue-500 hover:scale-105"
                }`}
            >
              <h3 className="text-lg font-semibold mb-2">
                {mode.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {mode.desc}
              </p>

              <button className="text-blue-500 hover:underline">
                Start →
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-20 py-16 bg-gray-950">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Choose Mode",
            "Talk with AI",
            "Get Feedback",
            "Crack Interview"
          ].map((step, index) => (
            <div key={index}>
              <div className="text-blue-500 text-3xl mb-3">
                {index + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Ace Your Next Interview?
        </h2>

        <p className="text-gray-400 mt-4">
          Start practicing today and boost your confidence.
        </p>

        <div className="mt-8">
          <StartButton />
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} InterveuX.ai — Built for future devs 🚀
      </footer>

    </div>
  );
}