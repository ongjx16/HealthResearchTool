import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Basic from "./components/Basic";
import Button from "./components/Button";
import GenerateMedia from "./components/GenerateMedia";
import UploadFile from "./components/UploadFile";
import Summarise from "./components/Summarise";
import Chatbot from "./components/Chatbot";
import RelatedArticles from "./components/RelatedArticles";

function App() {
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [step, setStep] = useState("upload");
  const [summarised, setSummarised] = useState({});


  return (

    <div className="w-full h-full ml-24 md:ml-60 mr-8 mt-4">
      <div className="flex flex-col justify-center border-gray-100 border-[1px] rounded-lg">
        <div className="w-full flex flex-col justify-center">
          <h1 className="font-bold text-center text-xl p-10">MedSimplifieD</h1>
          <div className="place-content-center justify-center border-gray-100 border-[1px] h-400 rounded-xl mx-10 mb-6 shadow-lg">
            <div className="w-full flex flex-col justify-center items-center ">
              <div className="flex flex-row justify-center bg-gray-100 rounded-full w-fit text-sm m-5">
              </div>
              <div className="bg-gray-100 w-full p-2">
                <Router>
                  <Routes>
                    <Route path='/' element={<div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
            <div className="text-center m-20">
                <text>Click to </text>
                <button className="text-primary"> browse </button>
                <text> or drag and drop your files.</text>
            </div>
            {(function () {
                if (isLoading) {
                    return <div>
                        <div className="place-content-center justify-center border-gray-100 border-[1px] h-400 rounded-xl mx-10 mb-6 shadow-lg p-5">
                            <div className="flex flex-row justify-between">
                                <div className="my-2">Uploading...</div>
                                <div className="flex flex-row">
                                    <button className="text-center rounded-full bg-gray-100 text-gray-700 text-xs h-6 w-6 p-1">||</button>
                                    <button className="rounded-full bg-red-300 text-red-700 h-6 w-6 text-xs text-center p-1 mx-1">X</button>
                                </div>
                            </div>
                            <div className=" text-xs mt-2 text-gray-700 mb-4">75 %  -  12 Seconds remaining</div>
                            <div className="flex flex-row justify-right bg-gray-100 rounded-full w-full h-1">
                                <div className="bg-primary rounded-full w-1/2">
                                </div>
                            </div>
                        </div>
                    </div>;
                } else {
                    return null;
                }
            })()}
            <div className="flex flex-row justify-center m-5">
                <div
                    className="w-36 cursor-pointer text-gray-500 transition-all duration-200 hover:text-gray-700 text-center mr-8 p-2 rounded-md hover:bg-gray-100"
                >
                    Cancel
                </div>
                <div className="w-36 text-right ml-8">
                    <Button text="Upload" />
                </div>
            </div>
            <div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
                <div>
                    <text>summarise page immediately after file upload</text>
                </div>
                <div>
                    <Link to="/RelatedArticles" className="underline">ask for related articles</Link>
                </div>
                <div>
                    <Link to="/Chatbot" className="underline">ask questions</Link>
                </div>
                <div>
                    <Link to="/GenerateMedia" className="underline">generate media</Link>
                </div>

            </div>
        </div>} />
                    <Route path='/GenerateMedia' element={<GenerateMedia />} />
                    <Route path='/Summarise' element={<Summarise />} />
                    <Route path='/Chatbot' element={<Chatbot />} />
                    <Route path='/RelatedArticles' element={<RelatedArticles />} />
                  </Routes>
                </Router>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
export default App;