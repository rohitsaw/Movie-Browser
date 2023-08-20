import { render, screen, fireEvent } from "@testing-library/react";
import PageHeader from "./pageHeader.js";

describe("Header component", () => {
  it("should render header component correctly", () => {
    const onChangeFn = jest.fn();
    const handleHomeRedirectFn = jest.fn();

    render(
      <PageHeader
        inputRef={null}
        handleChange={onChangeFn}
        handleHomeRedirect={handleHomeRedirectFn}
      />
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("Should Call handleChange correctly", () => {
    const onChangeFn = jest.fn();
    const handleHomeRedirectFn = jest.fn();

    render(
      <PageHeader
        inputRef={null}
        handleChange={onChangeFn}
        handleHomeRedirect={handleHomeRedirectFn}
      />
    );
    const textField = screen.getByTestId("textfield").querySelector("input");

    fireEvent.change(textField, {
      target: { value: "Changed Value" },
    });

    setTimeout(() => {
      expect(onChangeFn).toBeCalledWith("Changed Value");
    }, 600);
  });

  it("Should Call HomeButton Correctly", () => {
    const onChangeFn = jest.fn();
    const handleHomeRedirectFn = jest.fn();

    render(
      <PageHeader
        inputRef={null}
        handleChange={onChangeFn}
        handleHomeRedirect={handleHomeRedirectFn}
      />
    );
    const homeButton = screen.getByRole("button");

    fireEvent.click(homeButton);

    expect(handleHomeRedirectFn).toHaveBeenCalled();
  });
});
