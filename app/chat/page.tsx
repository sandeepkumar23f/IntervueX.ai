"use client";

import { useEffect, useRef, useState } from "react";

import ProtectedRoute from "@/components/ProtectedRoute";

import Sidebar from "@/components/interview/Sidebar";
import ChatHeader from "@/components/interview/ChatHeader";
import InterviewStats from "@/components/interview/InterviewStats";
import ChatMessages from "@/components/interview/ChatMessages";
import ChatInput from "@/components/interview/ChatInput";
import TypingIndicator from "@/components/interview/TypingIndicator";
import EmptyState from "@/components/interview/EmptyState";

import { Message } from "@/types/interview";

export default function ChatPage() {
  const [role, setRole] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");

    if (!savedRole) {
      setRole("InterviewX AI");
      return;
    }

    setRole(savedRole);

    const welcomeMessage =
      savedRole === "custom"
        ? "Welcome to InterviewX 🚀 Tell me what role or company you're preparing for."
        : `Welcome to your ${savedRole} mock interview. Let's begin.`;

    setMessages([
      {
        role: "ai",
        content: welcomeMessage,
      },
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      let aiReply =
        "Interesting answer. Can you explain more?";

      switch (role) {
        case "Frontend Developer":
          aiReply =
            currentQuestion === 1
              ? "What is Virtual DOM in React?"
              : "Explain the difference between useState and useRef.";
          break;

        case "Backend Developer":
          aiReply =
            currentQuestion === 1
              ? "What is REST API?"
              : "Explain middleware in Express.js.";
          break;

        case "DSA":
          aiReply =
            currentQuestion === 1
              ? "What is the time complexity of Binary Search?"
              : "Explain HashMap internal working.";
          break;

        case "HR Interview":
          aiReply =
            "Tell me about yourself and your strengths.";
          break;

        case "custom":
          aiReply =
            "Great! Which role or company are you targeting?";
          break;
      }

      setMessages([
        ...updatedMessages,
        {
          role: "ai",
          content: aiReply,
        },
      ]);

      setCurrentQuestion((prev) =>
        Math.min(prev + 1, totalQuestions)
      );

      setLoading(false);
    }, 1500);
  };

  return (
    <ProtectedRoute>
      <div className="h-screen bg-[#0f0f0f] text-white flex overflow-hidden">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col">

          {/* Header */}
          <ChatHeader role={role} />

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto">

            {messages.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                <ChatMessages messages={messages} />

                {loading && (
                  <TypingIndicator />
                )}

                <div ref={bottomRef} />
              </>
            )}

          </div>

          {/* Input */}
          <ChatInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            loading={loading}
          />

        </main>

        {/* Right Stats Panel */}
        <InterviewStats
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />

      </div>
    </ProtectedRoute>
  );
}