import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, dispatch, dark }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return(
        <TopicListItem topic={topic} key={topic.id} dispatch={dispatch} dark={dark}/>
        )
      })}
    </div>
  );
};

export default TopicList;
