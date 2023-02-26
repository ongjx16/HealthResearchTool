import React, { useState } from "react";
import { Link } from "react-router-dom";

const GenerateMedia = ({ input = "summarised text" }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePowerPointClick = () => {
    setIsLoading(true);

    fetch(`http://ongjx16.pythonanywhere.com/${input}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // do something with the data
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleInfographicsClick = () => {
    // handle Infographics button click
  };

  return (
    <div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
      <h1 className="text-2xl font-bold mb-6">Generate Media</h1>
      <div className="text-center">
        <button
          className="bg-orange-400 hover:bg-orange-700 text-slate-50 font-bold py-2 px-4 rounded inline-flex items-center mr-4"
          onClick={handlePowerPointClick}
          disabled={isLoading}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>{isLoading ? "Downloading..." : "PowerPoint"}</span>
        </button>
        <button
          className="bg-green-400 hover:bg-green-700 text-slate-50 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={handleInfographicsClick}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 0v20h20V0H0zm18 18H2V2h16v16zm-4-4v-4h-4v4h4zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm1-3a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          <span>Infographics</span>
        </button>
      </div>

      <div className="mt-6">
        <Link to="/Chatbot" className="underline mr-6">
          ask questions
        </Link>
        <Link to="/" className="underline">
          back to upload file
        </Link>
      </div>
    </div>
  );
};

export default GenerateMedia;
