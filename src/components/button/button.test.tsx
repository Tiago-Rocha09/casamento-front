import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  const props = {
    text: "Presentear",
    onClick: jest.fn(),
  };

  it("should show button with text and onclick", () => {
    const tempProps = { ...props };
    render(<Button {...tempProps} />);

    const button = screen.getByRole("button", {
      name: new RegExp(tempProps.text),
    });

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(tempProps.onClick).toHaveBeenCalledTimes(1);
  });
});
