import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavProps {
  className?: string;
}

export const Navbar = () => {
  return (
    <div className={classNames(cls.navbar, {}, ["navbar"])}>
      <Link to={"/"}>Main Page </Link>
      <Link to={"/about"}> About Page</Link>
    </div>
  );
};
