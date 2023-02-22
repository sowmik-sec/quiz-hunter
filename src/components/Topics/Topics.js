import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div>
      {topics.data.map((topic) => (
        <Topic topic={topic} key={topic.id} />
      ))}
    </div>
  );
};

export default Topics;
