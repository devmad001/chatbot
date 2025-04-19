import React from "react";
import VerticalBarChart from "./BarChart";
import SynergyMetrics from "./SynergyMetrics";
import Modal from "./powerModal";
import TreeDivisionDiagram from "./Tree";
type MessageProps = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
  isList?: boolean;
  isModal?: boolean;
  isTree?: boolean;
};

const Message: React.FC<MessageProps> = ({
  text,
  sender,
  isChart,
  isList,
  isModal,
  isTree,
}) => {
  return (
    <div
      className={`p-3 my-2 ${
        sender === "user"
          ? "text-black bg-gray-300 rounded-2xl self-end"
          : "bg-white rounded-2xl"
      }`}
    >
      <div
        className="flex flex-col"
        style={{ width: isModal ? "300px" : "50%" }}
      >
        {isChart ? <VerticalBarChart /> : <p className="mb-2">{text}</p>}
        {isList ? <SynergyMetrics metrics={[]} /> : null}
        {isTree && <TreeDivisionDiagram  />}
        {isModal && <Modal imageUrl="/Group3.png" title="Synergy Metrics" />}
      </div>
    </div>
  );
};

export default Message;
