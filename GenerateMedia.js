import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GenerateMedia = ({ input = "summarised text"}) =>{
    const [isLoading, setisLoading] = useState(false);
    return (
        <div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
            <text>generate media</text>
            <div>
                    <Link to="/Chatbot" className="underline">ask questions</Link>
                </div>
                <div>
                    <Link to="/" className="underline">back to upload file</Link>
                </div>
        </div>


    );}


    export default GenerateMedia;