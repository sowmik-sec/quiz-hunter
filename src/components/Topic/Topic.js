import React from "react";

const Topic = ({ topic }) => {
  const { logo, name, total } = topic;
  return (
    <div className="border-2 border-lime-500 m-1 p-3 w-60 bg-slate-300">
      <img src={logo} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Topic;
