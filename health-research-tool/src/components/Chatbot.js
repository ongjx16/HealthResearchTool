import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
      <h1 className="text-2xl font-bold mb-6">Chatbot</h1>
      <div className="mt-6 space-y-2 flex flex-col">
        <div>
          <Link
            to="/GenerateMedia"
            className="underline text-blue-600 hover:text-blue-800"
          >
            <button className="w-40 h-13 bg-slate-900 hover:bg-slate-500 text-white text-lg rounded-md px-4 py-1">
              Generate Media
            </button>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="underline text-blue-600 hover:text-blue-800"
          >
            <button className="w-40 h-13 bg-slate-900 hover:bg-slate-500 text-white font-bold text-lg rounded-md px-4 py-1">
              Back to Upload File
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
