import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-hot-toast";
import Options from "../Options/Options";

const Quiz = ({ qn, count, rightAns, setRightAns, wrongAns, setWrongAns }) => {
  const { question, options, correctAnswer } = qn;
  const handleEyeClick = () => {
    toast(correctAnswer);
  };
  return (
    <div className="md:w-[700px] md:mx-auto h-auto my-6 shadow-md p-2">
      <div className="flex justify-between items-center mb-8">
        <h3 className="ml-12 w-[500px]">
          <span>Quiz {count}:</span> {question}
        </h3>
        <FontAwesomeIcon onClick={handleEyeClick} icon={faEye} />
      </div>
      <div className="grid md:grid-cols-2 text-left">
        {options.map((option) => (
          <Options
            option={option}
            correctAnswer={correctAnswer}
            key={option}
            rightAns={rightAns}
            setRightAns={setRightAns}
            wrongAns={wrongAns}
            setWrongAns={setWrongAns}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
