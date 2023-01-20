import ManagePage from "pages/services/manage";
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

describe("Manage", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<ManagePage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
