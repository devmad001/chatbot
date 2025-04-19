import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
// import "./output.css";

type MessageType = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: MessageType = { text: message, sender: "user" };
    setMessages([...messages, userMessage]);

    // Check if user asked for a chart
    if (message.toLowerCase().includes("chart")) {
      const gptMessage: MessageType = {
        text: "Here is the chart you requested:",
        sender: "gpt",
        isChart: true,
      };
      setMessages((prevMessages) => [...prevMessages, gptMessage]);
      return;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <div
        className="flex-1 overflow-hidden p-4"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <ChatWindow messages={messages} />
      </div>
      {loading && (
        <div className="text-center text-gray-500">GPT is typing...</div>
      )}
      <div className="p-4 bg-white border-gray-300">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default App;
