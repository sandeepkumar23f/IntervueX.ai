import VoiceButton from "./VoiceButton";

export default function InputBox({ input, setInput, sendMessage }: any) {
  return (
    <div className="p-4 border-t border-gray-700 flex gap-3">

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer..."
        className="flex-1 h-12 px-4 rounded-md bg-gray-800 outline-none"
      />

      <VoiceButton setInput={setInput} />

      <button
        onClick={sendMessage}
        className="bg-blue-600 px-6 rounded-md hover:bg-blue-700"
      >
        Send
      </button>

    </div>
  );
}