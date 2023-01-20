import LocalPage from "pages/properties/local";
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
  banner: imageMock,
};

describe("Local", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<LocalPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
