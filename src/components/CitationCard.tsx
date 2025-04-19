import React from "react";

interface CitationCardProps {
  citationText: string;
  value: string;
  pageNumber: number;
  presentationLink: string;
  date: string;
  location: string;
}

const CitationCard: React.FC<CitationCardProps> = ({
  citationText,
  value,
  pageNumber,
  presentationLink,
  date,
  location,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 text-gray-800">
        The source for the{" "}
        <span className="bg-blue-500 text-white px-2 py-1 rounded">
          {value}
        </span>{" "}
        million figure for the value of equity is on page {pageNumber} in the
        investor presentation linked below.
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-teal-500 to-teal-600">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white font-bold text-xl">
              <img src="/capgemini-logo.png" alt="Capgemini" className="h-8" />
            </div>
            <div className="text-white font-bold text-xl">
              <img src="/altran-logo.png" alt="Altran" className="h-8" />
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-xl font-semibold mb-2">Capgemini and Altran</h2>
            <p className="text-sm">
              create a global digital transformation leader
              <br />
              for industrial and tech companies
            </p>
          </div>

          <div className="mt-4 text-white text-sm">
            {location} · {date}
          </div>
        </div>

        <div className="p-4 bg-white">
          <a
            href={presentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <span>Open Presentation</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CitationCard;
