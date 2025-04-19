import React from "react";

type ModalProps = {
  imageUrl: string;
  title: string;
};

const Modal: React.FC<ModalProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-gray-800 font-medium">{title}</h3>
        <div className="flex items-center space-x-4 mt-2">
          <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Open in PowerPoint
          </button>
          <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
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
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
