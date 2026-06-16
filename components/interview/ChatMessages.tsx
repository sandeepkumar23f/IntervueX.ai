import { Message } from "@/types/interview";
import MessageBubble from "./MessageBubble";

type Props = {
  messages: Message[];
};

export default function ChatMessages({
  messages,
}: Props) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto py-6">

      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          message={message}
        />
      ))}

    </div>
  );
}