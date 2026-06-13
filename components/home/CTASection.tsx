import StartButton from "../StartButton";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">

        <h2 className="text-4xl font-bold">
          Ready To Crack Your Next Interview?
        </h2>

        <p className="mt-4 text-lg text-gray-100">
          Start practicing today with AI-powered mock interviews.
        </p>

        <div className="mt-8">
          <StartButton />
        </div>

      </div>
    </section>
  );
}