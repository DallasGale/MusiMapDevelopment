import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import Home from "@app/page";

describe("Home Page", () => {
  it("renders a heading in english", async () => {
    let component;
    await act(async () => {
      component = await Home({ params: { lang: "en" } });
    });
    render(component);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toMatchInlineSnapshot(`
      <h1>
        Explore a Constellation of Sound Intelligence
      </h1>
    `);
  });
  it("renders a heading in spanish", async () => {
    let component;
    await act(async () => {
      component = await Home({ params: { lang: "es" } });
    });
    render(component);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toMatchInlineSnapshot(`
      <h1>
        Explora una constelación de inteligencia sonora
      </h1>
    `);
  });
  it("renders a heading in dutch", async () => {
    let component;
    await act(async () => {
      component = await Home({ params: { lang: "de" } });
    });
    render(component);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toMatchInlineSnapshot(`
      <h1>
        Ontdek een constellatie van klankintelligentie
      </h1>
    `);
  });
});
