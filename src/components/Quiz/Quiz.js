import React from "react";
import Options from "../Options/Options";

const Quiz = ({ qn, count }) => {
  const { question, options, correctAnswer } = qn;
  return (
    <div className="md:w-[700px] md:mx-auto h-auto my-6 shadow-md p-2">
      <h3>
        <span>Quiz {count}:</span> {question}
      </h3>
      <div className="grid md:grid-cols-2 text-left">
        {options.map((option) => (
          <Options option={option} correctAnswer={correctAnswer} key={option} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
