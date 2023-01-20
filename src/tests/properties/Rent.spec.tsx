import React from "react";
import RentPage from "pages/properties/rent";
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

describe("Rent", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<RentPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
