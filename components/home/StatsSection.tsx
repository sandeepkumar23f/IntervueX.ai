export default function StatsSection() {
  const stats = [
    { value: "5000+", label: "Mock Interviews" },
    { value: "92%", label: "Success Rate" },
    { value: "20+", label: "Interview Domains" },
    { value: "24/7", label: "AI Availability" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900 rounded-xl p-8 text-center border border-gray-800"
          >
            <h3 className="text-3xl font-bold text-blue-500">
              {stat.value}
            </h3>

            <p className="mt-2 text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}