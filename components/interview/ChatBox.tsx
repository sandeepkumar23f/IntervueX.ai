"use client";

import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import InputBox from "./InputBox";

export default function ChatBox() {
  const [messages, setMessages] = useState<any[]>([
    {
      role: "ai",
      content:
        "Hey 👋 I'm your AI interviewer. What would you like to prepare for?"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Nice! Tell me more about that." }
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white">

      <div className="p-4 border-b border-gray-800 flex justify-between">
        <span className="text-sm text-gray-400">Mode: Interview Prep</span>
        <span className="text-sm text-gray-500">AI Interviewer</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}

        {loading && (
          <div className="bg-gray-700 p-3 rounded-lg w-fit">
            AI thinking...
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="px-6 pb-2 flex gap-2 flex-wrap">
          {["Frontend", "DSA", "Mock Interview"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setInput(item);
                setTimeout(() => sendMessage(), 100);
              }}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <InputBox input={input} setInput={setInput} sendMessage={sendMessage} />

    </div>
  );
}