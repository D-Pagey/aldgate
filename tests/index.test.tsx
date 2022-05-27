import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("Home page", () => {
  it("should render", () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should redirect to /game page on completed name", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const input = screen.getByLabelText("Please enter your name");
    const button = screen.getByText("START");

    await user.type(input, "Dan");
    await button.click();

    expect(mockRouterPush).toHaveBeenCalledWith("/game");
  });
});
