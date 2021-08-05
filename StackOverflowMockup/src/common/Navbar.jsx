import React from "react";
import "./Navbar.scss"
import { useHistory } from "react-router-dom";

export function Navbar(props) {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="">
        <label
          title="Go to home"
          style={{cursor:"pointer"}}
          onClick={() => history.push("/question")}
        >
          stack<strong>overflow</strong> 
        </label>
      </div>
    </div>
  );
}
