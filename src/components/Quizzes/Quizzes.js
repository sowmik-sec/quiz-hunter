import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Marks from "../Marks/Marks";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  let [count, setCount] = useState(1);
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const quizs = useLoaderData();
  const { name } = quizs.data;
  const { questions } = quizs.data;
  // console.log(questions);
  return (
    <div className="grid md:grid-cols-5">
      <div className="md:col-span-4 text-center my-12 text-teal-500">
        <h3 className="text-2xl mb-12">Quiz of {name}</h3>
        {questions.map((qn) => (
          <Quiz
            key={qn.id}
            qn={qn}
            count={count++}
            rightAns={rightAns}
            setRightAns={setRightAns}
            wrongAns={wrongAns}
            setWrongAns={setWrongAns}
          />
        ))}
      </div>
      <div className="">
        <Marks rightAns={rightAns} wrongAns={wrongAns} />
      </div>
    </div>
  );
};

export default Quizzes;
