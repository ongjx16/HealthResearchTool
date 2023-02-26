import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './RelatedArticles.css';
import Axios from "axios";

const RelatedArticles = ({ input = "summarised text"}) =>{
    const [isLoading, setisLoading] = useState(false);
    const [joke, setJoke] = useState("");
    const handleClick = () => {
        Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
            setJoke(response.data.setup + " ... " + response.data.punchline);
            }
        );
    };
    return (
        <div className="bg-white m-5 border-gray-200 border-[1px] border-dashed rounded-lg p-10">
            <div className='header'>
                <h >Similar research articles to the one you uploaded:</h>
                <button onClick={handleClick}>Generate Articles</button>
                {joke}
            </div>
                
            <div>
                    <Link to="/Chatbot" className="underline">ask questions</Link>
                </div>
                <div>
                    <Link to="/" className="underline">back to upload file</Link>
                </div>
        </div>



    );}


    export default RelatedArticles;