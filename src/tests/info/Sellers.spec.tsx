import React from "react";
import SellersPage from "pages/info/sellers";
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

describe("Sellers", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<SellersPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
