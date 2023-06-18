import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getLoginError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual("error");
  });
  test("should work with an empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
