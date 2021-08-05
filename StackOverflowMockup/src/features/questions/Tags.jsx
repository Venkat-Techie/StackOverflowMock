import React from "react";

export function Tags({ tags, ...props }) {
  return (
    <>
      {tags.map((tag) => (
        <div className="tags">{tag}</div>
      ))}
    </>
  );
}
