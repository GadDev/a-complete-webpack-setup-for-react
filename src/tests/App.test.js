import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import App from "../components/App";

describe("App component", () => {
  beforeAll(() => {
    render(<App />);
  });

  test("should have the right message in the dom", () => {
    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent("Welcome to my-webpack-react-starter");
  });

  afterAll(cleanup);
});
