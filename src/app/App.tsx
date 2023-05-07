import { Routes, Route, Link } from "react-router-dom";

import { Suspense, useContext, useState } from "react";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";
import "./styles/index.scss";

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
        <Link to={"/"}>Main Page </Link>
        <Link to={"/about"}> About Page</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/"} element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
