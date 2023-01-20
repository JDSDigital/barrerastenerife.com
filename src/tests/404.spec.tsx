import * as mocks from "tests/__mocks__/gatsby";

import NotFoundPage from "../pages/404";
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

describe("404", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<NotFoundPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
