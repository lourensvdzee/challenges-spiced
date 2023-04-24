import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: "/" };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation players={[]} />);

  const playLink = screen.getByText("Play");
  const historyLink = screen.getByText("History");

  expect(playLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});
