import React from "react";
import { Questionscard } from "./QuestionsCard";

export function QuestionContainer({ questionsData, ...props }) {
  return (
    <div className="questionsMain">
      <div className="topHeader">
        <label>Top Questions</label>
      </div>
      <hr className="hrTag" />
      <Questionscard quesData={questionsData} />
    </div>
  );
}
