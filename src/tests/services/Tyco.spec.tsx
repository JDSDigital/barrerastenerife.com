import React from "react";
import TycoPage from "pages/services/tyco";
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

describe("Tyco", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<TycoPage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
