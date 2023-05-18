import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";

describe("Button Component", () => {
  test("renders button component", () => {
    render(<Button>Test</Button>);
    expect(screen.getByTestId("themeButton")).toBeInTheDocument();
  });

  test("renders button with correct children name", () => {
    const label = "Click me";
    render(<Button>{label}</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
