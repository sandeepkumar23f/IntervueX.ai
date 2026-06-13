type Props = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
  loading: boolean;
};

export default function ChatInput({
  input,
  setInput,
  sendMessage,
  loading,
}: Props) {
  return (
    <div className="border-t border-gray-800 p-4 flex gap-2">

      <button
        className="px-4 py-2 bg-gray-800 rounded-lg"
      >
        🎤
      </button>

      <input
        value={input}
        disabled={loading}
        onChange={(e) =>
          setInput(e.target.value)
        }
        onKeyDown={(e) =>
          e.key === "Enter" && sendMessage()
        }
        className="flex-1 bg-gray-900 rounded-lg px-4 py-2"
        placeholder="Type your answer..."
      />

      <button
        disabled={loading}
        onClick={sendMessage}
        className="bg-blue-600 px-6 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}