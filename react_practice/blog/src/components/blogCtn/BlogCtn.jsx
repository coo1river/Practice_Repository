import React, { useState } from "react";
import { Title, Header, Content, CtnBox } from "./BlogCtn.syled";

export default function BlogCtn() {
  const [data, setData] = useState([
    { title: "삼겹살 맛집", content: "삼겹살 맛있다" },
    { title: "소곱창 맛집", content: "소곱창 너무 맛있어" },
    { title: "졸리다", content: "너무 졸려" },
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
      <Header>Blog</Header>
      {data.map((x, i) => {
        return (
          <CtnBox>
            <Title key={i} onClick={() => redirectToOtherWebsite(i)}>
              {x.title}
            </Title>
            <hr />
            <Content>{x.content}</Content>
          </CtnBox>
        );
      })}
      <input type="text" />
      <button>추가</button>
    </>
  );
}
