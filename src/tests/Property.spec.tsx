import * as ReactQuery from "react-query";

import { render, waitFor } from "@testing-library/react";

import PropertyPage from "../pages/property";
import React from "react";
import { createPropertyMock } from "./__mocks__/createPropertyMock";

const imageMock = {
  childImageSharp: {
    fixed: {},
    fluid: {},
    publicURL: "",
  },
};

const mockData = {
  background1: imageMock,
};

const property = createPropertyMock();

jest.spyOn(ReactQuery, "useQuery").mockImplementation(
  jest.fn().mockReturnValue({
    data: { data: property },
    isLoading: false,
    isSuccess: true,
  })
);

describe("Property", () => {
  it("does not have basic accessibility issues", async () => {
    const { container } = render(
      <PropertyPage
        data={mockData}
        // @ts-ignore
        location={{ search: "?id=property-id" }}
      />
    );

    await waitFor(() => {
      expect(container).toHTMLValidate();
    });
  });
});
