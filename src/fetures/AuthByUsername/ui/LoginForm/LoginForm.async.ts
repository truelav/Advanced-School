import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // dont do this in real projects
      setTimeout(() => resolve(import("./LoginForm"), 1000));
    })
);
