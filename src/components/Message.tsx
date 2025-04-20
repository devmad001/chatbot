import React from "react";
import VerticalBarChart from "./BarChart";
import SynergyMetrics from "./SynergyMetrics";
import Modal from "./powerModal";
import TreeDivisionDiagram from "./Tree";
import ConsolidationTable from "./ConsolidationTable";
import CitationCard from "./CitationCard";

type MessageProps = {
  text: string;
  sender: "user" | "gpt";
  isChart?: boolean;
  isList?: boolean;
  isModal?: boolean;
  isTree?: boolean;
  isTable?: boolean;
  isCitation?: boolean;
  onCitationLinkClick?: () => void;
};

const Message: React.FC<MessageProps> = ({
  text,
  sender,
  isChart,
  isList,
  isModal,
  isTree,
  isTable,
  isCitation,
  onCitationLinkClick,
}) => {
  return (
    <div
      className={`py-1 px-2 my-2 max-w-1/2  ${
        sender === "user"
          ? "text-black bg-gray-300 rounded-full self-end"
          : "bg-white rounded-full"
      }`}
    >
      <div className="flex flex-col px-3 py-1 justify-center w-1/2">
        {isChart ? <VerticalBarChart /> : <p>{text}</p>}
        {isList ? (
          <SynergyMetrics
            items={[
              {
                metric: "Footprint consolidation",
                detail: "39% of target branches are within 10km",
                rating: "HIGH",
              },
              {
                metric: "Overhead rationalization",
                detail: "54% of country organizations overlap",
                rating: "HIGH",
              },
              {
                metric: "IT Infrastructure savings",
                detail: "Both firms run on Temenos platform",
                rating: "HIGH",
              },
              {
                metric: "Cross‑selling potential",
                detail: "Adds 25 new local markets (16M consumers)",
                rating: "MEDIUM",
              },
              {
                metric: "Total synergies",
                detail: "Above median of 18% of target revenue",
                rating: "HIGH",
              },
            ]}
          />
        ) : null}
        {isTree && <TreeDivisionDiagram />}
        {isModal && <Modal imageUrl="/Group3.png" title="Synergy Graph" />}
        {isTable && (
          <ConsolidationTable
            data={{
              type: "table",
              columns: [
                "Consolidation targets",
                "Branch overlap within 3km",
                "No. of branches",
              ],
              rows: [
                ["Bäckerei Theurer", "100%", "19"],
                ["Backparadies Hug", "100%", "15"],
                ["Bäckerei Otto Schall", "94%", "31"],
                ["Rieglers Bäckerei", "93%", "14"],
                ["Bäckerei Rutz", "74%", "23"],
              ],
            }}
          />
        )}
        {isCitation && (
          <CitationCard
            citationText="The source for the value of equity"
            value="3,600"
            pageNumber={5}
            presentationLink="#"
            date="June 24th, 2019"
            location="Paris"
            onLinkClick={onCitationLinkClick}
          />
        )}
      </div>
    </div>
  );
};

export default Message;
