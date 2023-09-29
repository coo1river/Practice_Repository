import React, { useEffect, useState } from "react";
import BoardList from "./Components/BoardList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function moveBoard() {
    navigate("/list", { state: { data } });
  }

  return (
    <div>
      <h1>메인 페이지</h1>
      <button onClick={moveBoard}>보드</button>
      <BoardList data={data} />
    </div>
  );
}
