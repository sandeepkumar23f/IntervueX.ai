"use client";

import { Mic, SendHorizontal } from "lucide-react";

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
    <div className="border-t border-zinc-800 bg-[#171717] p-4">

      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-3xl px-4 py-3">

          {/* Voice Button */}
          <button
            className="text-zinc-400 hover:text-white transition"
          >
            <Mic size={20} />
          </button>

          {/* Input */}
          <input
            value={input}
            disabled={loading}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
            placeholder="Message InterviewX..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-zinc-500"
          />

          {/* Send */}
          <button
            disabled={loading}
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 p-2 rounded-full transition"
          >
            <SendHorizontal size={18} />
          </button>

        </div>

        <p className="text-center text-xs text-zinc-500 mt-2">
          AI responses may occasionally be inaccurate.
        </p>

      </div>

    </div>
  );
}