import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./router/Router";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: lightgray;
  font-family: 'Noto Sans KR', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200&display=swap');
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}
export default App;
