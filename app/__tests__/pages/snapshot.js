import { render, act } from "@testing-library/react";
import Home from "@app/page";
import { MantineProvider } from "@mantine/core";
import theme from "@app/theme";

describe("Home Page Snaphot", () => {
  it("renders home page unchanged in english", async () => {
    let component;
    await act(async () => {
      component = await Home({ params: { lang: "en" } });
    });
    render(
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {component}
      </MantineProvider>,
    );

    expect(component).toMatchSnapshot();
  });
  it("renders home page unchanged in spanish", async () => {
    let component;
    await act(async () => {
      component = await Home({ params: { lang: "es" } });
    });
    render(
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {component}
      </MantineProvider>,
    );

    expect(component).toMatchSnapshot();
  });
  it("renders home page unchanged in dutch", async () => {
    let component;
    await act(async () => {
      component = await Home({ params: { lang: "de" } });
    });
    render(
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        {component}
      </MantineProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});
