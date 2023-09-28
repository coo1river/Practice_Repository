import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import BoardPage from "./Board/BoardPage";
import BoardList from "./Components/BoardList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<BoardPage />} />
          <Route path="/listprops" element={<BoardList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
