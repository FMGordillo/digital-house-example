import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppSelector from "./AppSelector";
import "./index.css";
import Layout from "./Layout";
import Problem01 from "./Problem01";
import Problem02 from "./Problem02";
import reportWebVitals from "./reportWebVitals";
import Solution01 from "./Solution01";
import Solution02 from "./Solution02";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AppSelector />} />
          <Route path="/problem-01" element={<Problem01 />} />
          <Route path="/solution-01" element={<Solution01 />} />
          <Route path="problem-02" element={<Problem02 />} />
          <Route path="/solution-02" element={<Solution02 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
