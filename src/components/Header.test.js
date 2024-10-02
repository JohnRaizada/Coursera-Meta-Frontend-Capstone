import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    beforeEach(() => {
        render(<Header />);
    });
    afterAll(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test("Renders Header component", () => {
        const headerElement = screen.getByRole("banner");
        expect(headerElement).toBeInTheDocument();
    });
    test("Renders logo correctly", () => {
        const logoElement = screen.getByAltText("logo");
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute("src");
        expect(logoElement).toHaveAttribute("title");
    });
    test("Renders navigation correctly", () => {
        const navElement = screen.getByRole("navigation");
        expect(navElement).toBeInTheDocument();
    });
    test("Renders hamburger menu correctly", () => {
        const hamburgerElement = screen.getByAltText("menu");
        expect(hamburgerElement).toBeInTheDocument();
        expect(hamburgerElement).toHaveAttribute("src");
        expect(hamburgerElement).toHaveAttribute("title");
    });
    test("Clicking on logo navigates to home", () => {
        const logoElement = screen.getByAltText("logo");
        logoElement.click();
        expect(window.location.href).toMatch(/localhost\//);
    });
});
