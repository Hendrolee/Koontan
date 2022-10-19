import { screen, render } from "@testing-library/react";
import MainHeader from "../MainHeader";

describe("MainHeader component", () => {
  test("renders header title", () => {
    render(<MainHeader />);
    const titleElement = screen.getByText("Koontan");
    expect(titleElement).toBeInTheDocument();
  });
});
