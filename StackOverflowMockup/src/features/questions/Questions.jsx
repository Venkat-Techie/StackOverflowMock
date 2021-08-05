import React, { useEffect, useState } from "react";
import { fetchFeaturedQuestions } from "../../api/apis";
import "./Questions.scss";
import quesData from "./QuestionsData.json";
import { QuestionContainer } from "./QuestionContainer";

export function Questions(props) {
  const [questionsData, setQuestionsData] = useState(quesData.items);
  useEffect(() => {
    getQuestionsData();
  }, []);

  const getQuestionsData = () => {
    fetchFeaturedQuestions()
      .then((res) => {
        setQuestionsData(res.data.items);
      })
      .catch((err) => console.error(err));
  };
  return questionsData.length > 0 ? (
    <QuestionContainer questionsData={questionsData} />
  ) : null;
}
