import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("with only first param", () => {
    componentRender(<Counter />);
    expect(screen.getByTestId("counter")).toBeInTheDocument();
  });

  test("with only first param", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId("increment-button"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId("increment-button"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
