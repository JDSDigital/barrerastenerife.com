import * as mocks from "tests/__mocks__/gatsby";

import IndexPage from "../pages/index";
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

describe("Home", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<IndexPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
