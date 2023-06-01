import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("should decrement state by 1", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.decrement())
    ).toEqual({ value: 9 });
  });

  test("should increment state by 1", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.increment())
    ).toEqual({ value: 11 });
  });

  test("should work wotj empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
