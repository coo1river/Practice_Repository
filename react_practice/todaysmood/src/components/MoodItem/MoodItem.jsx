import React from "react";
import { useState } from "react";
import "./MoodItem.css";

export default function MoodItem() {
  const [mood, Setmood] = useState([
    "좋아요! 😃",
    "정말 좋아요 🤗",
    "슬퍼요 😥",
    "화나요 😡",
  ]);

  return (
    <div>
      <li className="li_mood">
        {mood.map((x, i) => (
          <button key={i} className="btn_mood">
            기분이: {x}
          </button>
        ))}
      </li>
    </div>
  );
}
