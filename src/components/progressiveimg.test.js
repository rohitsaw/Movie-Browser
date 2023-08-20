import { render, screen, fireEvent } from "@testing-library/react";
import ProgressiveImg from "./progressiveImg.js";

describe("Progressive Image Component", () => {
  it("should render fallback image if no src provided", () => {
    render(<ProgressiveImg />);
    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/fallback.png");
  });

  it("should render source image  under 1 sec", () => {
    const src =
      "https://image.tmdb.org/t/p/original/gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg";
    render(<ProgressiveImg src={src} />);
    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();
    setTimeout(() => {
      expect(image).toHaveAttribute("src", src);
    }, 1000);
  });

  it("should render fallback image if src image loading failed", () => {
    const src =
      "https://image.tmdb.org/t/p/original/gq5Wi7i4SF3lo4HHkJasDV95xI91111111111.jpg";
    render(<ProgressiveImg src={src} />);
    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();
    setTimeout(() => {
      expect(image).toHaveAttribute("src", "/fallback.png");
    }, 1000);
  });

  it("test onError of img", () => {
    render(
      <ProgressiveImg
        src={
          "https://image.tmdb.org/t/p/original/gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg"
        }
      />
    );
    const image = screen.getByTestId("image");
    fireEvent.error(image);
    expect(image).toHaveAttribute("src", "/fallback.png");
  });
});
