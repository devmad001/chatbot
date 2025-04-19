import React from "react";
import VerticalBarChart from "./BarChart";
import SynergyMetrics from "./SynergyMetrics";
type MessageProps = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
  isList?: boolean;
};

const Message: React.FC<MessageProps> = ({ text, sender, isChart, isList }) => {
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
        {isList ? <SynergyMetrics metrics={[]} /> : null}
      </div>
    </div>
  );
};

export default Message;
