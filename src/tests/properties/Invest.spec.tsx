import InvestPage from "pages/properties/invest";
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

describe("Invest", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<InvestPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
