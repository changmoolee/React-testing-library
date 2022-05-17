import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be "change to red"
  expect(colorButton.textContent).toBe("change to red");
});

test("initial conditions", () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  expect(colorButton).toBeEnabled();
  // 버튼이 이용가능한가?

  //check that the checkbox starts out unchecked

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();
  //input 이 체크 안되어있어야 한다.
});
