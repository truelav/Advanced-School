import axios from "axios";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.test", () => {
  test("", () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { username: "123", id: "1" } })
    );
    const action = loginByUsername({ username: "123", password: "123" });
  });
});
