import { render, screen } from "@testing-library/react";
import RightPanel from "@/components/layout/RightPanel";

describe("RightPanel", () => {
  it("renders the right panel text", () => {
    render(<RightPanel />);
    expect(screen.getByText("우측 패널")).toBeInTheDocument();
  });
});
