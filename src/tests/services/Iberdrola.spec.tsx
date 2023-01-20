import IberdrolaPage from "pages/services/iberdrola";
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
  service: imageMock,
};

describe("Iberdrola", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<IberdrolaPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
