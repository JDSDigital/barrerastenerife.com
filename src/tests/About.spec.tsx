import * as mocks from "tests/__mocks__/gatsby";

import AboutPage from "../pages/about";
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
  founder: imageMock,
  time: imageMock,
  languages: imageMock,
  reviews: imageMock,
  mission: imageMock,
  service: imageMock,
  banner: imageMock,
};

describe("About", () => {
  it("does not have basic accessibility issues", async () => {
    const { container } = render(
      // @ts-ignore
      <AboutPage data={mockData} />
    );

    expect(container).toHTMLValidate();
  });
});
