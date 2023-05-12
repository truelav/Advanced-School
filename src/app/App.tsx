import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import "./styles/index.scss";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </>
  );
}
