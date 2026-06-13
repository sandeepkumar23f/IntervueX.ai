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
        className={`max-w-lg rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-blue-600"
            : "bg-gray-900 border border-gray-700"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}