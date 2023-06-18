import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getLoginPassword.test", () => {
  test("should return 123 value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "123",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("123");
  });
  test("should work with no password and should return an empty string", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
