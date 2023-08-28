import React from "react";
import Search from "../components/search";
import { render } from "@testing-library/react";

describe("Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("has placeholder text", () => {
    const { getByPlaceholderText } = render(<Search />);

    expect(getByPlaceholderText("Search image..")).toHaveClass(
      "form__searchField"
    );
  });
});
