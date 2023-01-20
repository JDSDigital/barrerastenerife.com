import ListPage from "pages/promotion/list";
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

describe("Promotion List", () => {
  it("does not have basic accessibility issues", async () => {
    const { container } = render(
      // @ts-ignore
      <ListPage data={mockData} location={{ search: "" }} />
    );

    expect(container).toHTMLValidate();
  });
});
