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
      <h1>MainPage</h1>
      <button onClick={moveBoard}>Board</button>
      <BoardList data={data} />
    </div>
  );
}
