import React from "react";
import App from "../components/App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("renders Correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
