import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryPage from "./components/CountryPage";
    
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/country/:name" element={<CountryPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
