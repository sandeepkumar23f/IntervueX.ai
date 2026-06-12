"use client";

import { useEffect, useRef, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function ChatPage() {
  const [role, setRole] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  // 🔥 Load role + initial AI message
  useEffect(() => {
    const savedRole = localStorage.getItem("role");

    if (savedRole) {
      setRole(savedRole);

      if (savedRole === "custom") {
        setMessages([
          {
            role: "ai",
            content:
              "Hey 👋 I'm your AI interviewer. Tell me what you'd like to prepare for.",
          },
        ]);
      } else {
        setMessages([
          {
            role: "ai",
            content: `Great choice! Let's start your ${savedRole} interview 🚀`,
          },
        ]);
      }
    }
  }, []);

  // 🔥 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    const newMessages = [...messages, userMsg];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // 🔥 Fake AI response (replace later with backend)
    setTimeout(() => {
      let reply = "Tell me more.";

      if (role === "custom") {
        reply = "Nice 👍 What specific topic or role do you want to focus on?";
      } else if (role === "Frontend Developer") {
        reply = "Let's start with React. What is Virtual DOM?";
      } else if (role === "DSA") {
        reply = "Solve this: Find the first non-repeating character in a string.";
      }

      setMessages([
        ...newMessages,
        { role: "ai", content: reply },
      ]);

      setLoading(false);
    }, 1000);
  };

  return (
    <ProtectedRoute>
      <div className="h-screen flex flex-col bg-black text-white">

        {/* 🔥 Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-lg">InterveuX AI</h1>
            <p className="text-xs text-gray-400">
              {role === "custom" ? "Custom Session" : role + " Interview"}
            </p>
          </div>

          <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">
            Live Session
          </span>
        </div>

        {/* 🔥 Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600"
                    : "bg-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* 🔥 Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 px-4 py-2 rounded-2xl text-sm animate-pulse">
                AI is typing...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

    

        {/* 🔥 Input Box */}
        <div className="p-4 border-t border-gray-800 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 bg-gray-900 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Type your answer..."
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 px-5 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>

      </div>
    </ProtectedRoute>
  );
}