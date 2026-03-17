import { render, screen } from "@testing-library/react";
import LeftPanel from "@/components/layout/LeftPanel";

describe("LeftPanel", () => {
  it("renders the left panel text", () => {
    render(<LeftPanel />);
    expect(screen.getByText("왼쪽 패널")).toBeInTheDocument();
  });
});
