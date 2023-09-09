import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState([
    "강남역 우동 맛집",
    "역삼역 삼겹살 맛집",
    "신사역 디저트 맛집",
  ]);

  const [like, setLike] = useState([0, 0, 0]);
  const likePlus = (i) => {
    const copy = [...like];
    copy[i] += 1;
    setLike(copy);
  };

  const Modal = () => {
    title.map((x, i) => (
      <div className="list" key={i}>
        {x}
      </div>
    ));
  };

  return (
    <>
      <div className="black-nav">
        <h2>ReactBlog</h2>
      </div>
      {title.map((x, i) => (
        <div className="list" key={i}>
          <h4 onClick>
            {x}
            <button className="btn-like" onClick={() => likePlus(i)}>
              💙
            </button>
            <span>{like[i]}</span>
          </h4>
          <p>글 내용</p>
        </div>
      ))}

      <Modal />
    </>
  );
}
