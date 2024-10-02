import { cleanup, render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );
    });
    afterAll(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test("Renders button correctly", () => {
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Reserve a table");
    });
    test("Renders heading correctly", () => {
        const headingElement = screen.getByRole("heading", { level: 1 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent("Little Lemon");
    });
    test("Renders subheading correctly", () => {
        const subheadingElement = screen.getByRole("heading", { level: 2 });
        expect(subheadingElement).toBeInTheDocument();
        expect(subheadingElement).toHaveTextContent("Chicago");
    });
    test("Renders paragraph correctly", () => {
        const paragraphElement = screen.getByText(
          "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        );
        expect(paragraphElement).toBeInTheDocument();
    });
    test("Renders image correctly", () => {
        const imageElement = screen.getByAltText(
            "A waiter holding a tray of four food items in black apron."
        );
        expect(imageElement).toBeInTheDocument();
    });

});
