import React from "react";

const Marks = ({ rightAns, wrongAns }) => {
  return (
    <div className="bg-red-200 p-3 sticky top-0 h-[500px]">
      <h3>Correct ans: {rightAns}</h3>
      <h3>Wrong ans: {wrongAns}</h3>
      <h3>Total Marks: {rightAns - wrongAns}</h3>
    </div>
  );
};

export default Marks;
