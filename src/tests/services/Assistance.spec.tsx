import AssistancePage from "pages/services/assistance";
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

describe("Assistance", () => {
  it("does not have basic accessibility issues", async () => {
    // @ts-ignore
    const { container } = render(<AssistancePage data={mockData} />);

    expect(container).toHTMLValidate();
  });
});
