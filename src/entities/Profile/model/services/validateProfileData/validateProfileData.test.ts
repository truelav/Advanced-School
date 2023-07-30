import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/profile";

const data = {
  username: "admin",
  age: 22,
  country: Country.Ukraine,
  lastname: "ulbi tv",
  first: "asd",
  city: "asd",
  currency: Currency.USD,
};

describe("validateProfileData.test", () => {
  test("success", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("error, missing first and lastname", async () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("error, incorrect age", async () => {
    const result = validateProfileData({ ...data, age: 0 });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("error, incorrect country", async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("error, incorrect country, age, last and firstname", async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
