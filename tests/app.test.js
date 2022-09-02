import Nav from "../components/MainNav";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

describe("App renders", () => {
  it("renders the nav", () => {
    render(<Nav />);
    const aboutUs = screen.getByText(/About us/i);
    expect(aboutUs).toBeVisible();
  });
  it("reders the Hero", () => {
    render(<Hero />);
    const hero = screen.getByText(/React Conference/i);
    expect(hero).toBeVisible();
  });
});
