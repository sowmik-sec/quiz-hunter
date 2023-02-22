import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  let [count, setCount] = useState(1);
  const quizs = useLoaderData();
  const { name } = quizs.data;
  const { questions } = quizs.data;
  // console.log(questions);
  return (
    <div className="text-center my-12 text-teal-500">
      <h3 className="text-2xl mb-12">Quiz of {name}</h3>
      {questions.map((qn) => (
        <Quiz key={qn.id} qn={qn} count={count++} />
      ))}
    </div>
  );
};

export default Quizzes;
