import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { logo, name, total, id } = topic;
  return (
    <div className="shadow-md m-1 p-3 w-72 mx-auto">
      <div className="bg-slate-300">
        <img src={logo} alt="" />
      </div>
      <div className="flex justify-between pt-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>Qn:{total}</p>
        <Link to={`/quiz/${id}`}>
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Start Practice
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
