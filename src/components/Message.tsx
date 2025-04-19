import React from "react";
import VerticalBarChart from "./BarChart";
import SynergyMetrics from "./SynergyMetrics";
import Modal from "./powerModal";
import TreeDivisionDiagram from "./Tree";
import ConsolidationTable from "./ConsolidationTable";
type MessageProps = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
  isList?: boolean;
  isModal?: boolean;
  isTree?: boolean;
  isTable?: boolean;
};

const Message: React.FC<MessageProps> = ({
  text,
  sender,
  isChart,
  isList,
  isModal,
  isTree,
  isTable,
}) => {
  return (
    <div
      className={`py-1 px-2 my-2 ${
        sender === "user"
          ? "text-black bg-gray-300 rounded-full self-end"
          : "bg-white rounded-full"
      }`}
    >
      <div className="flex flex-col" style={{ width: "50%" }}>
        {isChart ? <VerticalBarChart /> : <p className="mb-2">{text}</p>}
        {isList ? <SynergyMetrics metrics={[]} /> : null}
        {isTree && <TreeDivisionDiagram />}
        {isModal && <Modal imageUrl="/Group3.png" title="Synergy Graph" />}
        {isTable && <ConsolidationTable />}
      </div>
    </div>
  );
};

export default Message;
