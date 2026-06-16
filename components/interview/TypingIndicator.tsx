export default function TypingIndicator() {
  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="flex justify-start">
        <div className="bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-2xl">

          <div className="flex gap-2 items-center">

            <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" />

            <div
              className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.15s" }}
            />

            <div
              className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />

          </div>

        </div>
      </div>
    </div>
  );
}