import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export function ModificationDetails({ item, ...props }) {
  let date = item.last_edit_date ? item.last_edit_date : item.last_activity_date
  let convertedDate = moment.unix(date).format("MMM DD");
  let convertedTime = moment.unix(date).format("HH:mm");
  let modifiedBy = (
    <Link className="link" to={`/profile/${item.owner.user_id}`}>
      {item.owner.display_name}
    </Link>
  );

  return (
    <time>
      {`modified ${convertedDate} at ${convertedTime} `}
      {modifiedBy}
    </time>
  );
}
