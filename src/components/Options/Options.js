import React from "react";

const Options = ({ option }) => {
  console.log(option);
  return (
    <div className="border-2 rounded border-lime-500 m-2 p-2">
      <input type="radio" name="option" id={option} value={option} />
      <label className="ml-2" for={option}>
        {option}
      </label>
    </div>
  );
};

export default Options;
