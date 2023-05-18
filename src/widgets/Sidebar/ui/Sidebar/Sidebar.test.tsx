import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { Sidebar } from "widgets/Sidebar/index";
import { renderWithTranslation } from "shared/tests/renderWithTranslation";

describe("Sidebar Component", () => {
  test("renders button component", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar-component")).toBeInTheDocument();
  });

  test("checks toggle functionality", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-button-toggle");
    expect(screen.getByTestId("sidebar-button-toggle")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar-component")).toHaveClass("collapsed");
  });
});
