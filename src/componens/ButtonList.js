import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Trending",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "News",
  "Music",
  "Technology",
  "Cars",
  "Bikes",
  "Planes",
  "Chips",
  "Trailers",
  "Matches",
  "Footballs",
];

const ButtonList = () => {
  return (
    <div className="flex ml-2">
      {list.map((name, index) => {
        return <Button name={name} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
