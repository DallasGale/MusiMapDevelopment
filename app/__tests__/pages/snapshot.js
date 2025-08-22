import { render, act } from "@testing-library/react";
import Home from "@app/[lng]/page";
import { MantineProvider } from "@mantine/core";
import theme from "@app/[lng]/theme";
import { headers } from "next/headers";
import { homePageTranslations } from "../../_mocks/translations";

// Mock the headers function
jest.mock("next/headers", () => ({
  headers: jest.fn(),
}));

// Mock your i18n module
jest.mock("../../i18n/index", () => {
  return {
    getT: jest.fn().mockImplementation(async () => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { headers } = require("next/headers");
      const headerList = await headers();
      const lng = headerList.get("accept-language") || "en";

      // Simulate language change based on headers
      const translations = homePageTranslations[lng] || homePageTranslations.en;

      return {
        t: jest.fn((key, options) => {
          if (key === "text" && options?.returnObjects) {
            return translations;
          }
          return key;
        }),
      };
    }),
  };
});

describe("Home Page Language-Specific Snapshots", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders home page with English translations", async () => {
    // Set English headers
    const mockHeaders = new Map();
    mockHeaders.set("accept-language", "en");
    headers.mockResolvedValue(mockHeaders);

    let component;
    await act(async () => {
      component = await Home();
    });

    const { container } = render(
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {component}
      </MantineProvider>,
    );

    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe(homePageTranslations.en.headline);

    const h2 = container.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2.textContent).toBe(homePageTranslations.en.paragraph);

    expect(h1).toMatchSnapshot("home-page-english-h1");
    expect(h2).toMatchSnapshot("home-page-english-h2");
  });

  it("renders home page with Spanish translations", async () => {
    // Set English headers
    const mockHeaders = new Map();
    mockHeaders.set("accept-language", "es");
    headers.mockResolvedValue(mockHeaders);

    let component;
    await act(async () => {
      component = await Home();
    });

    const { container } = render(
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {component}
      </MantineProvider>,
    );

    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe(homePageTranslations.es.headline);

    const h2 = container.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2.textContent).toBe(homePageTranslations.es.paragraph);

    expect(h1).toMatchSnapshot("home-page-spanish-h1");
    expect(h2).toMatchSnapshot("home-page-spanish-h2");
  });

  it("renders home page with Duthc translations", async () => {
    // Set English headers
    const mockHeaders = new Map();
    mockHeaders.set("accept-language", "de");
    headers.mockResolvedValue(mockHeaders);

    let component;
    await act(async () => {
      component = await Home();
    });

    const { container } = render(
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {component}
      </MantineProvider>,
    );

    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe(homePageTranslations.de.headline);

    const h2 = container.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2.textContent).toBe(homePageTranslations.de.paragraph);

    expect(h1).toMatchSnapshot("home-page-dutch-h1");
    expect(h2).toMatchSnapshot("home-page-dutch-h2");
  });

  it("renders home page with French translations", async () => {
    // Set English headers
    const mockHeaders = new Map();
    mockHeaders.set("accept-language", "fr");
    headers.mockResolvedValue(mockHeaders);

    let component;
    await act(async () => {
      component = await Home();
    });

    const { container } = render(
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {component}
      </MantineProvider>,
    );

    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe(homePageTranslations.fr.headline);

    const h2 = container.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2.textContent).toBe(homePageTranslations.fr.paragraph);

    expect(h1).toMatchSnapshot("home-page-french-h1");
    expect(h2).toMatchSnapshot("home-page-french-h2");
  });
});
