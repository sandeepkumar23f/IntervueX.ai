export default function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: "AI Mock Interviews",
      desc: "Practice realistic interview scenarios."
    },
    {
      icon: "📊",
      title: "Instant Feedback",
      desc: "Know your strengths and weaknesses."
    },
    {
      icon: "💻",
      title: "Technical Interviews",
      desc: "Frontend, Backend, DSA and more."
    },
    {
      icon: "🧑‍💼",
      title: "HR Preparation",
      desc: "Improve communication and confidence."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      desc: "Monitor improvement over time."
    },
    {
      icon: "🎤",
      title: "Voice Interviews",
      desc: "Coming Soon."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}