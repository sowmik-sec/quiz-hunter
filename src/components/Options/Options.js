import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Options = ({ option, correctAnswer }) => {
  const handleChange = (e) => {
    const userAns = e.target.value;
    if (correctAnswer === userAns) {
      toast.success("Correct ans");
    } else {
      toast.error("Wrong ans");
    }
  };
  return (
    <div className="border-2 rounded border-lime-500 m-2 p-2">
      <input
        type="radio"
        name="option"
        id={option}
        value={option}
        onChange={(e) => handleChange(e)}
      />
      <label className="ml-2">{option}</label>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Options;
