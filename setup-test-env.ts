import "@testing-library/jest-dom";
import "html-validate/jest";

import * as Gatsby from "gatsby";
import * as utils from "./src/utils";

import { createPropertiesMock } from "./src/tests/__mocks__/createPropertiesMock";
import { createPropertyMock } from "./src/tests/__mocks__/createPropertyMock";

const { graphql } = require("tests/__mocks__/gatsby");

export const imageMock = {
  childImageSharp: {
    fixed: {},
    fluid: {},
    publicURL: "",
  },
};

const mockData = {
  site: {
    siteMetadata: {
      title: "Title",
    },
  },
};

const imageNames = [
  "logo",
  "es",
  "en",
  "ru",
  "it",
  "fr",
  "de",
  "buy",
  "sell",
  "rent",
  "background",
  "invest",
  "local",
  "promotion",
  "services",
  "image",
  "map",
  "tyco",
  "caser",
  "iberdrola",
  "banner",
  "gian",
  "irina",
  "maryna",
  "amarilla",
  "sanblas",
  "tejita",
  "medano",
  "abrigos",
  "adeje",
  "abama",
  "sanjuan",
  "isora",
  "saneugenio",
  "puerto",
];

const images = imageNames.reduce(
  (acc, curr) => ((acc[curr] = imageMock), acc),
  {}
);

const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: `Title`,
    },
  },
  ...images,
};

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

jest.mock("gatsby-plugin-react-i18next", () => ({
  ...jest.requireActual("gatsby-plugin-react-i18next"),
  useTranslation: () => ({
    t: translationKey => translationKey,
  }),
  useI18next: () => ({
    languages: [],
    originalPath: "",
  }),
}));

jest.mock("react-scroll-parallax", () => ({
  ParallaxBanner: ({ children }) => children,
  ParallaxProvider: ({ children }) => children,
}));

jest.mock("gatsby-plugin-firebase", () => ({
  functions: jest.fn(),
}));

jest.mock("react-slick", () => jest.fn());

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: () => ({
    status: "",
  }),
}));

jest.mock("react-image-gallery", () => jest.fn());

jest.mock("gatsby-image", () => jest.fn());

jest.mock("google-map-react", () => jest.fn());

jest.mock("@material-ui/core", () => ({
  ...jest.requireActual("@material-ui/core"),
  CircularProgress: jest.fn(),
  Slider: jest.fn(),
  TextField: jest.fn(),
}));

jest.spyOn(utils, "getPropertyList").mockImplementation(createPropertiesMock);

jest.spyOn(utils, "getProperty").mockImplementation(createPropertyMock);

// Mock ResizeObserver since jsdom doesn't provide it
class ResizeObserver {
  cb: any;

  constructor(cb) {
    this.cb = cb;
  }

  observe(cb) {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }

  unobserve() {}

  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

global.DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};

beforeAll(() => {
  graphql.mockImplementation(() => mockData);
  useStaticQuery.mockImplementation(() => mockUseStaticQuery);
});

afterEach(() => {
  window.sessionStorage.clear();
  window.localStorage.clear();
  jest.clearAllMocks();
});
