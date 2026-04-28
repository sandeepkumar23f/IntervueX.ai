"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ChatPage() {
  const [role, setRole] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole);
  }, []);

  const sendMessage = () => {
    if (!input) return;

    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white flex flex-col">

        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-lg font-semibold">
            {role} Interview
          </h1>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className="mb-2">
              <div className="bg-gray-800 p-2 rounded w-fit">
                {msg}
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Buttons (YOUR CODE HERE ✅) */}
        <div className="px-6 pb-2 flex gap-2 flex-wrap">
          {["Frontend", "DSA", "Mock Interview"].map((item) => (
            <button
              key={item}
              onClick={() => setInput(item)}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 flex gap-2 border-t border-gray-700">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-900 px-3 py-2 rounded"
            placeholder="Ask something..."
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 px-4 rounded"
          >
            Send
          </button>
        </div>

      </div>
    </ProtectedRoute>
  );
}