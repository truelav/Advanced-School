import { Routes, Route, Link } from "react-router-dom";

import "./index.scss";
import { Suspense } from "react";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export default function App() {
  return (
    <>
      <div className="App">
        App
        <Link to={"/"}>Main Page</Link>
        <Link to={"/about"}>Main Page</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={"/about"} element={<AboutPageAsync />} />
            <Route path={"/"} element={<MainPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
