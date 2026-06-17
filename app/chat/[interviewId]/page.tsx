"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Interview = {
  _id: string;
  role: string;
  status: string;
};

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const { interviewId } = useParams();

  const [interview, setInterview] =
    useState<Interview | null>(null);

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/interview/${interviewId}`,
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        setInterview(data.interview);

        setMessages([
          {
            role: "assistant",
            content: `Welcome to your ${data.interview.role} interview 🚀

Tell me about yourself.`,
          },
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, [interviewId]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: input,
      },
    ]);

    setInput("");
  };

  if (loading) {
    return (
      <div className="h-screen bg-[#212121] flex items-center justify-center text-white">
        Loading Interview...
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#212121] text-white flex flex-col">

      {/* Header */}

      <div className="h-14 border-b border-zinc-800 flex items-center px-6">

        <h1 className="font-medium text-lg">
          {interview?.role}
        </h1>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto px-6 py-8">

        <div className="max-w-4xl mx-auto space-y-6">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-2xl px-4 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-blue-600"
                    : "bg-zinc-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Input */}

      <div className="border-t border-zinc-800 p-4">

        <div className="max-w-4xl mx-auto flex gap-3">

          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
            placeholder="Type your answer..."
            className="flex-1 bg-zinc-800 rounded-xl px-4 py-3 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}