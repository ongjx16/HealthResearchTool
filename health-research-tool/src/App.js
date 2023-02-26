import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Basic from "./components/Basic";
import Button from "./components/Button";
import GenerateMedia from "./components/GenerateMedia";
import UploadFile from "./components/UploadFile";
import Summarise from "./components/Summarise";
import Chatbot from "./components/Chatbot";
import RelatedArticles from "./components/RelatedArticles";
import axios from 'axios'

function App() {
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [step, setStep] = useState("upload");
  const [summarised, setSummarised] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isFileSelected, setFileSelected] = useState(false);
  const [isFileUploaded, setFileUploaded] = useState(false);

  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileSelected(true);
  };

  const handleSubmission = () => {
    console.log("submitted")
    setFileUploaded(true)

    // Create an object of formData
    const formData = new FormData();


    // Update the formData object
    formData.append(
      "myFile",
      selectedFile,
    );
    setUploadedFile(formData)

    // Details of the uploaded file
    console.log(selectedFile);
  };

  useEffect(() => {
    setisLoading(true)
    // axios.post("https://murong2602.pythonanywhere.com/", uploadedFile)
    //   .then(response => {
    //     console.log(response.data);

    //     setisLoading(false)
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    fetch("https://murong2602.pythonanywhere.com/file", {
      method: "POST",
      body: selectedFile
    }).then(response => {
      // handle response from Flask server
      console.log(response)
      setisLoading(false)
    }).catch(error => {
      console.error(error);})
  }, [isFileUploaded])


  return (

    <div className="w-full h-full ml-24 md:ml-60 mr-8 mt-4">
      <div className="flex flex-col justify-center border-gray-100 border-[1px] rounded-lg">
        <div className="w-full flex flex-col justify-center">
          <h1 className="font-bold text-center text-3xl pt-10">MedSimplifieD</h1>
          <text className="font-italic text-center p-10"> Your very own smart AI tool to analyse and generate insights to medical resarch papers</text>
          <div className="place-content-center justify-center border-gray-100 border-[1px] h-400 rounded-xl mx-10 mb-6 shadow-lg">
            <div className="w-full flex flex-col justify-center items-center ">
              <div className="flex flex-row justify-center bg-gray-100 rounded-full w-fit text-sm m-5 ">
              </div>
              <div className="bg-gray-100 w-full p-2 h-96">
                <Router>
                  <Routes>
                    <Route path='/' element={<div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
                      <div className="text-center m-20">
                        {isFileSelected ? (<div>
                          <p>Filename: {selectedFile.name}</p>
                          <p>Filetype: {selectedFile.type}</p>
                          <p>Size in bytes: {selectedFile.size}</p>
                        </div>) : (<div>
                          <input type="file" onChange={fileChangeHandler} /></div>)}
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

                        <div className="w-36 text-right ml-8">
                          <Button text="Upload" onClickHandler={handleSubmission} />
                        </div>
                      </div>
                      <div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
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