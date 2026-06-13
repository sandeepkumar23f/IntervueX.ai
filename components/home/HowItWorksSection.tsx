export default function HowItWorksSection() {
  const steps = [
    "Choose Interview Type",
    "Answer AI Questions",
    "Receive Detailed Feedback",
    "Improve and Retry"
  ];

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>

              <p className="text-gray-300">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}