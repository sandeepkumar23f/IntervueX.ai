import { Message } from "@/types/interview";
import MessageBubble from "./MessageBubble";

type Props = {
  messages: Message[];
};

export default function ChatMessages({
  messages,
}: Props) {
  return (
    <>
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          message={message}
        />
      ))}
    </>
  );
}