import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Pages", () => {
  it("Home page", () => {
    render(<Home />);

    expect(screen.getByText("Tutaj znajdziesz")).toBeInDocument();
  });
});
