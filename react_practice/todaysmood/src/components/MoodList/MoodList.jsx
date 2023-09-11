import React from "react";
import MoodItem from "../MoodItem/MoodItem";
import "./MoodList.css";

export default function MoodList() {
  return (
    <div>
      <ul className="list_mood">
        <MoodItem />
      </ul>
    </div>
  );
}
