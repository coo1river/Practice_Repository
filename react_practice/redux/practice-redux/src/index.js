import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import counterReducer from "./modules/counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const container = document.getElementById("root");

// store 생성
const store = createStore(counterReducer);

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
