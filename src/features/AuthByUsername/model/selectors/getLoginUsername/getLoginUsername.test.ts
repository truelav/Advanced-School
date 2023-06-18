import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getLoginUsername.test", () => {
  test("should return andreica", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "andreica",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("andreica");
  });
  test("should work with no username and should return an empty string", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
