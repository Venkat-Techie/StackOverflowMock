import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";
import "../questions/./Questions.scss";
import "./Profile.scss";
import { Toptags } from "./Toptags";
import userQuestData from "./UserTopQuestions.json";
import { fecthUserTopQuestions } from "../../api/apis";
import { QuestionContainer } from "../questions/QuestionContainer";

export function Profile(props) {
  let params = useParams();
  const [userQuestionsData, setUserQuestionsData] = useState(userQuestData.items);
  useEffect(() => {
    getQuestionsData();
  }, [userQuestionsData]);

  const getQuestionsData = () => {
    fecthUserTopQuestions(params.id)
      .then((res) => {
        setUserQuestionsData(res.data.items);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="">
      <div className="topHeader">
        <header>Profile</header>
      </div>
      <hr className="hrTag" />
      <div className="profileCard displayFlexRow">
        <ProfileCard />
      </div>
      <hr className="hrTag" />
      <div className="topTagsMain">
        <Toptags />
      </div>
      <hr className="hrTag" />
      {userQuestionsData.length > 0 && (
        <QuestionContainer questionsData={userQuestionsData} />
      )}
    </div>
  );
}
