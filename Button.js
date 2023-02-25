import React from "react";

const Button = ({ text = "Login", onClickHandler, classNames }) => {
  console.log("got class names:", classNames);
  return (
    <button
      className={`w-full rounded-md hover:opacity-90 hover:scale-105 transition-all duration-150 ease-linear  bg-blue-900 text-white px-3 m-auto py-2 ${classNames}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;