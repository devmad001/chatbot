import React from "react";
import Message from "./Message";

type MessageType = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
};

type ChatWindowProps = {
  messages: MessageType[];
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="flex flex-col m-10 space-y-4">
      {messages.map((msg, index) => (
        <Message
          key={index}
          text={msg.text}
          sender={msg.sender}
          isChart={msg.isChart}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
