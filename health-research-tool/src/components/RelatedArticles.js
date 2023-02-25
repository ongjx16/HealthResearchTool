import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RelatedArticles = ({ input = "summarised text"}) =>{
    const [isLoading, setisLoading] = useState(false);
    return (
        <div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
            <text>generate related articles</text>
            <div>
                    <Link to="/Chatbot" className="underline">ask questions</Link>
                </div>
                <div>
                    <Link to="/" className="underline">back to upload file</Link>
                </div>
        </div>



    );}


    export default RelatedArticles;