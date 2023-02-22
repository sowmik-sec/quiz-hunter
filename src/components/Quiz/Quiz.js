import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quiz = useLoaderData();
  console.log(quiz.data);
  const { name } = quiz.data;
  return (
    <div className="text-center my-12 text-teal-500">
      <h3 className="text-2xl">Quiz of {name}</h3>
    </div>
  );
};

export default Quiz;
