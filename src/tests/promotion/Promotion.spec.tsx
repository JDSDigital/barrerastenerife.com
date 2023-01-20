import PromotionPage from "pages/promotion/index";
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

describe("Promotion", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<PromotionPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
