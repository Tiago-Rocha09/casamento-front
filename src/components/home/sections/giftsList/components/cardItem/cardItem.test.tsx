import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardItem } from ".";

describe("CardItem", () => {
  const props = {
    id: 1,
    hasGuest: false,
    description: "Teste descrição",
    name: "Aparelho de jantar",
    image: {
      alt: "Aparelho de jantar",
      height: 208,
      width: 208,
      url: "/uploads/aparelho_de_jantar_em_porcelana_12_pecas_4997d2f224.jpg",
    },
  };

  it("Should render card item with image, title, description, and button", () => {
    render(<CardItem {...props} />);

    const image = screen.getByRole("img", {
      name: /Aparelho de jantar/i,
    });
    const title = screen.getByRole("heading", {
      name: /Aparelho de jantar/i,
    });
    const button = screen.getByRole("button", {
      name: /Presentear/i,
    });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Should render phrase "Já ganhamos" quando o item tiver hasGuest', () => {
    const tempProps = { ...props };
    tempProps.hasGuest = true;

    render(<CardItem {...tempProps} />);
    const hasGuestText = screen.getByText(/já ganhamos/i);
    const button = screen.queryByRole("button", {
      name: /Presentear/i,
    });

    expect(hasGuestText).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
