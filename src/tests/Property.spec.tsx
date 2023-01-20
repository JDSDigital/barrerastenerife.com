import PropertyPage from "../pages/property";
import React from "react";
import { render } from "@testing-library/react";

const imageMock = {
  childImageSharp: {
    fixed: {},
    fluid: {},
    publicURL: "",
  },
};

const mockData = {
  background1: imageMock,
};

describe("Property", () => {
  it("does not have basic accessibility issues", async () => {
    const { container } = render(
      // @ts-ignore
      <PropertyPage data={mockData} location={{ search: "" }} />
    );

    expect(container).toHTMLValidate();
  });
});
