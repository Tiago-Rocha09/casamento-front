import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ModalGift } from ".";

describe("ModalGift", () => {
  const props = {
    id: 1,
    show: true,
    toggleModal: jest.fn(),
    thanksMessage: 'ok'
  };

  it("Should render card item with image, title, description, and button", () => {
    render(<ModalGift {...props} />);

    const image = screen.getByRole("img", {
      name: /Aparelho de jantar/i,
    });
    const title = screen.getByRole("heading", {
      name: /Aparelho de jantar/i,
    });
    const description = screen.getByRole("paragraph");
    const button = screen.getByRole("button", {
      name: /Presentear/i,
    });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
