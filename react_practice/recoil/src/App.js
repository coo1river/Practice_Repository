import { useRecoilState } from "recoil";
import { countState } from "./atom";

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
    </>
  );
}

function DisplayCounter() {
  const [count] = useRecoilState(countState);
  return <div>{count}</div>;
}

function App() {
  return (
    <div>
      <Counter />
      <DisplayCounter />
    </div>
  );
}
export default App;
