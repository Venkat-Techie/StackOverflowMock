import React from "react";
import { Tags } from "./Tags";
import "./Questions.scss";
import { ModificationDetails } from "./ModificationDetails";

export function Questionscard(props) {
  const { quesData } = props;

  let cards = quesData.map((item) => {
    return (
      <div key={item.question_id} className="questionsCard">
        <div className="votesViewsSection displayFlexRow">
          <div className="displayFlexColumn votesDiv">
            <a className="displayFlexColumn votesDiv" href={item.link}>
              <div className="">{item.score}</div>
              <div className="">votes</div>
            </a>
          </div>
          <div className="displayFlexColumn votesDiv">
            <a className="displayFlexColumn votesDiv" href={item.link}>
              <div className="">{item.answer_count}</div>
              <div className="">answers</div>
            </a>
          </div>
          <div className="displayFlexColumn votesDiv">
            <a className="displayFlexColumn votesDiv" href={item.link}>
              <div className="">{item.view_count}</div>
              <div className="">views</div>
            </a>
          </div>
        </div>
        <div className="titleAndTags displayFlexColumn">
          <div className="">
            <span className="reputationTag" title>
              +{item.owner.reputation}
            </span>
            <a className="titleLink link" href={item.link}>
              {item.title}
            </a>
          </div>
          <div className="displayFlexRow">
            <Tags tags={item.tags} />
          </div>
          <div className="modifiedDate">
            <ModificationDetails item={item} />
          </div>
        </div>
        <hr className="hrTag" />
      </div>
    );
  });

  return cards;
}
