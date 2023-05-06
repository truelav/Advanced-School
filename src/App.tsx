import { Routes, Route, Link } from "react-router-dom";

import "./styles/index.scss";
import { Suspense, useState } from "react";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleThem = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <>
      <div className={`app ${theme}`}>
        App
        <div>
          <button onClick={toggleThem}>
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
