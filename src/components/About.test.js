import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import About from './About';

describe('About', () => {
    beforeEach(() => {
        render(<About />);
    });
    test('Renders name correctly', () => {
        const nameElement = screen.getByText("Little Lemon");
        expect(nameElement).toBeInTheDocument();
    });
    test('Renders city correctly', () => {
        const cityElement = screen.getByText("Chicago");
        expect(cityElement).toBeInTheDocument();
    });
    test('Renders description correctly', () => {
        const descriptionElement = screen.getByText(
          "Little Lemon began as a dream shared by two brothers, Adrian and Mario. Growing up in the heart of Chicago, they were immersed in the rich, flavorful tapestry of Mediterranean cuisine. Their grandmother's kitchen was a sanctuary of warmth and tradition, where the aromas of freshly baked pita bread, sizzling kebabs, and fragrant spices filled the air. Inspired by her love for cooking and her passion for sharing authentic flavors, Adrian and Mario decided to bring a taste of their heritage to the Windy City."
        );
        expect(descriptionElement).toBeInTheDocument();
    });
    test("Renders the correct number of images", () => {
      const imageElements = screen.getAllByRole("img");
      expect(imageElements.length).toBe(2);
    });
    test('Render top image correctly', () => {
        const imageElement = screen.getByAltText(
          "An open restaurant in sunshine with modern floors and glass top."
        );
        expect(imageElement).toBeInTheDocument();
    });
    test('Render bottom image correctly', () => {
        const imageElement = screen.getByAltText(
          "A cook preparing food in a kitchen by sprinking on it where the food is in a plate placed on top of a table."
        );
        expect(imageElement).toBeInTheDocument();
    });
    test('Renders the text in correct order', () => {
        const headingElement = screen.getByText("Little Lemon");
        const cityElement = screen.getByText("Chicago");
        const descriptionElement = screen.getByText(
          "Little Lemon began as a dream shared by two brothers, Adrian and Mario. Growing up in the heart of Chicago, they were immersed in the rich, flavorful tapestry of Mediterranean cuisine. Their grandmother's kitchen was a sanctuary of warmth and tradition, where the aromas of freshly baked pita bread, sizzling kebabs, and fragrant spices filled the air. Inspired by her love for cooking and her passion for sharing authentic flavors, Adrian and Mario decided to bring a taste of their heritage to the Windy City."
        );
    });
    afterAll(() => {
        jest.clearAllMocks();
        cleanup();
    });
});
