import BuyersPage from "pages/info/buyers";
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
  home: imageMock,
};

describe("Buyers", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<BuyersPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
