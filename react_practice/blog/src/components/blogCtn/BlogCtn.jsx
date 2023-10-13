import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Title } from "./BlogCtn.syled";

export default function BlogCtn() {
  const [title, setTitle] = useState([
    "메이플스토리",
    "리그오브레전드",
    "배틀그라운드",
  ]);

  return (
    <>
      <Title>
        {title.map((x, i) => {
          return <p key={i}>{x}</p>;
        })}
      </Title>
    </>
  );
}
