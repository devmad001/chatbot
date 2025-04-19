import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import ImageModal from "./components/ImageModal";
// import "./output.css";

type MessageType = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
  isList?: boolean;
  isModal?: boolean;
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    const modalMessage: MessageType = {
      text: "",
      sender: "gpt",
      isModal: true,
    };
    setMessages((prevMessages) => [...prevMessages, modalMessage]);
  };

  const handleSendMessage = async (message: string) => {
    const userMessage: MessageType = { text: message, sender: "user" };
    setMessages([...messages, userMessage]);

    // Check if user typed "modal"
    if (message.toLowerCase().includes("modal")) {
      setIsModalOpen(true);
      return;
    }

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
    if (message.toLowerCase().includes("list")) {
      const gptMessage: MessageType = {
        text: "",
        sender: "gpt",
        isList: true,
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

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imagePath="/Group3.png"
      />
    </div>
  );
};

export default App;
