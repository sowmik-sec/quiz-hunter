import React from "react";
import Options from "../Options/Options";

const Quiz = ({ qn, count }) => {
  const { question } = qn;
  const { options } = qn;
  console.log(options);
  return (
    <div className="w-[700px] mx-auto h-auto my-6 shadow-md p-2">
      <h3>
        <span>Quiz {count}:</span> {question}
      </h3>
      <div className="grid grid-cols-2 text-left">
        {options.map((option) => (
          <Options option={option} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
