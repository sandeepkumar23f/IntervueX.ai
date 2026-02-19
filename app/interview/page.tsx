"use client";

import { useState, useRef } from "react";

export default function InterviewPage() {
  const [messages, setMessages] = useState<any[]>([
    { role: "ai", content: "Hello  I am your AI interviewer. Tell me about yourself." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef<any>(null);

  const API = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognitionRef.current = recognition;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/ai/interview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: messages,
        }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "ai", content: data.reply || "No response" },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white">

      <div className="p-4 border-b border-gray-700 text-xl font-bold">
        🎤 InterveuX AI Interviewer
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xl p-3 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-600 ml-auto"
                : "bg-gray-700"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-700 p-3 rounded-lg w-fit">
            AI thinking...
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-700 flex gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
          className="flex-1 h-12 px-4 rounded-md bg-gray-800 outline-none"
        />

        <button
          onClick={startListening}
          className="bg-purple-600 px-4 rounded-md hover:bg-purple-700"
        >
          🎤
        </button>

        <button
          onClick={sendMessage}
          className="bg-blue-600 px-6 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
