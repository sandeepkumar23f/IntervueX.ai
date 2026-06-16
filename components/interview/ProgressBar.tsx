import { Message } from "@/types/interview";

type Props = {
  message: Message;
};

export default function MessageBubble({
  message,
}: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl px-5 py-4 rounded-2xl ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-zinc-900 border border-zinc-800 text-zinc-100"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}