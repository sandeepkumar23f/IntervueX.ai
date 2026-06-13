"use client";

import { useEffect, useRef, useState } from "react";

import ProtectedRoute from "@/components/ProtectedRoute";

import ChatHeader from "@/components/interview/ChatHeader";
import ProgressBar from "@/components/interview/ProgressBar";
import WelcomeCard from "@/components/interview/WelcomeCard";
import ChatMessages from "@/components/interview/ChatMessages";
import TypingIndicator from "@/components/interview/TypingIndicator";
import ChatInput from "@/components/interview/ChatInput";

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

    if (!savedRole) return;

    setRole(savedRole);

    const initialMessage =
      savedRole === "custom"
        ? "Welcome to InterviewX 🚀 Tell me what role or topic you'd like to prepare for."
        : `Welcome to your ${savedRole} interview. Let's begin.`;

    setMessages([
      {
        role: "ai",
        content: initialMessage,
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

    // Temporary AI response
    setTimeout(() => {
      let aiReply = "Tell me more.";

      if (role === "Frontend Developer") {
        aiReply = "What is Virtual DOM in React?";
      } else if (role === "Backend Developer") {
        aiReply = "Explain REST APIs.";
      } else if (role === "DSA") {
        aiReply =
          "What is the time complexity of Binary Search?";
      } else if (role === "custom") {
        aiReply =
          "Great. Which company or role are you targeting?";
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
      <div className="h-screen flex flex-col bg-black text-white">

        <ChatHeader role={role} />

        <div className="px-6 pt-4">
          <ProgressBar
            current={currentQuestion}
            total={totalQuestions}
          />
        </div>

        <div className="px-6 py-4">
          <WelcomeCard role={role} />
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">

          <ChatMessages messages={messages} />

          {loading && <TypingIndicator />}

          <div ref={bottomRef} />

        </div>

        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          loading={loading}
        />

      </div>
    </ProtectedRoute>
  );
}