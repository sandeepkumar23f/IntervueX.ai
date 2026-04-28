export default function MessageBubble({ role, content }: any) {
  return (
    <div
      className={`max-w-xl p-3 rounded-lg transition-all duration-300 ${
        role === "user"
          ? "bg-blue-600 ml-auto"
          : "bg-gray-700"
      }`}
    >
      {content}
    </div>
  );
}