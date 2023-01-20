import CaserPage from "pages/services/caser";
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

describe("Caser", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<CaserPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
