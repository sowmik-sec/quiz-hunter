import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="flex justify-around my-12">
        {topics.data.map((topic) => (
          <Topic topic={topic} key={topic.id} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
