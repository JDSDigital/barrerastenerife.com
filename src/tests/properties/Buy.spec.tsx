import BuyPage from "pages/properties/buy";
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

describe("Buy", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<BuyPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
