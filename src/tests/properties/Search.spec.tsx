import React from "react";
import SearchPage from "pages/properties/search";
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

describe("Search", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<SearchPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
