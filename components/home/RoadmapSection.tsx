export default function RoadmapSection() {
  const roadmap = [
    "📄 Resume Based Interviews",
    "🏢 Company Specific Interviews",
    "🎤 Voice Conversations",
    "📊 Advanced Analytics",
    "🤖 Personalized Roadmaps",
    "🏆 Placement Preparation Mode",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Coming Soon
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {roadmap.map((item) => (
            <div
              key={item}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}