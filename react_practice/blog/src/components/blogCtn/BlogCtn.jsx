import React, { useState } from "react";
import { Title, Header } from "./BlogCtn.syled";

export default function BlogCtn() {
  const [title, setTitle] = useState([
    "메이플스토리",
    "리그오브레전드",
    "배틀그라운드",
  ]);

  const [link, setLink] = useState([
    "https://maplestory.nexon.com/Home/Main",
    "https://www.leagueoflegends.com/ko-kr/",
    "https://pubg.game.daum.net/pubg/index.daum",
  ]);

  function redirectToOtherWebsite(i) {
    window.location.href = link[i];
  }

  return (
    <>
      <Header>BLOG</Header>
      {title.map((x, i) => {
        return (
          <Title>
            <h2 key={i} onClick={() => redirectToOtherWebsite(i)}>
              {x}
            </h2>
          </Title>
        );
      })}
    </>
  );
}
