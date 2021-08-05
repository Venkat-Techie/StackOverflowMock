import React, { useEffect, useState } from "react";
import { fetchUserTopTags } from "../../api/apis";
import { useParams } from "react-router-dom";
import tagList from "./UserToptags.json";
import "../questions/./Questions.scss";
import "./Profile.scss";

export function Toptags(props) {
  let params = useParams();
  const [tagsData, setTagsData] = useState(tagList.items);
  useEffect(() => {
    getTagList();
  }, []);

  const getTagList = () => {
    fetchUserTopTags(params.id)
      .then((res) => {
        setTagsData(res.data);
      })
      .catch((err) => console.error(err));
  };

  let list = tagsData.map((tag) => {
    return (
      <div className="displayFlexRow topTagsDiv">
        <div className="tags">{tag.name}</div>
        <div className="badgeDiv">
          <div className="scoreLable">SCORE</div>
          {tag.count}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="topHeader">Top Tags</div>
      <hr className="hrTag" />
      {list}
    </>
  );
}
