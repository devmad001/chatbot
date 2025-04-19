import React from "react";
import VerticalBarChart from "./BarChart";
import SynergyMetrics from "./SynergyMetrics";

type MessageProps = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
  isList?: boolean;
  isModal?: boolean;
};

const Message: React.FC<MessageProps> = ({
  text,
  sender,
  isChart,
  isList,
  isModal,
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
        {isModal && (
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={"/Group3.png"} className="w-full h-auto" />
            <div className="p-2 bg-gray-50">
              <div className="flex items-center justify-between">
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Open in PowerPoint
                </button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center">
                  Download
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
