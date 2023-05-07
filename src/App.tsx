import { Routes, Route, Link } from "react-router-dom";

import "./styles/index.scss";
import { Suspense, useContext, useState } from "react";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { ThemeContext, Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        App
        <div>
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
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
