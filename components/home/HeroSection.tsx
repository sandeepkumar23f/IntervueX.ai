import StartButton from "../StartButton";

export default function HeroSection() {
  return (
    <section className="py-28 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <span className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400">
          AI Powered Interview Preparation
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
          Land Your Dream Job With
          <span className="text-blue-500">
            {" "}AI Mock Interviews
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Practice technical and HR interviews, receive instant feedback,
          and improve your confidence before the real interview.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <StartButton />

          <button className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}