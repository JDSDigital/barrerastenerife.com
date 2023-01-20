import * as mocks from "tests/__mocks__/gatsby";

import ContactPage from "../pages/contact";
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
  placeholderImage: imageMock,
};

describe("Contact", () => {
  it("does not have basic accessibility issues", async () => {
    const { container } = render(
      // @ts-ignore
      <ContactPage data={mockData} />
    );

    expect(container).toHTMLValidate();
  });
});
