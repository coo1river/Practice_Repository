import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./modules/counter";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ color: "skyblue" }}>
      <h1>카운터</h1>
      <p>카운트: {count}</p>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
    </div>
  );
}
export default App;
