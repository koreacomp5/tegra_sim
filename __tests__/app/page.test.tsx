import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders both panels", () => {
    render(<Home />);
    expect(screen.getByText("왼쪽 패널")).toBeInTheDocument();
    expect(screen.getByText("우측 패널")).toBeInTheDocument();
  });
});
