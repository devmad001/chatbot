import React from "react";
import VerticalBarChart from "./BarChart";

type MessageProps = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
};

const Message: React.FC<MessageProps> = ({ text, sender, isChart }) => {
  return (
    <div
      className={`p-3 my-2 ${
        sender === "user"
          ? "text-black bg-gray-300 rounded-2xl self-end"
          : "bg-white"
      }`}
    >
      <div className="flex flex-col" style={{ width: "50%" }}>
        {isChart ? <VerticalBarChart /> : <p>{text}</p>}
      </div>
    </div>
  );
};

export default Message;
