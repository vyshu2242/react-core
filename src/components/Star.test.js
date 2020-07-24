import React from "react";
import { render } from "@testing-library/react";
import Star from "./Star";

describe("Star component", () => {
  it("should render stars", () => {
    const { debug, getByText, getByTestId } = render(<Star marked={true} />);
    debug();
    const input = getByTestId("test");
  });
});
