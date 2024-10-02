import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';
import { navLinks, mobile, email, addressLine1, addressLine2, socials } from '../Data';

describe('Footer', () => {
    beforeEach(() => {
        render(<Footer />);
    });
    afterAll(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('Renders Footer component', () => {
        const logoElement = screen.getByRole('contentinfo');
        expect(logoElement).toBeInTheDocument();
    });
    test('Renders logo correctly', () => {
        const logoElement = screen.getByAltText('logo');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('src');
        expect(logoElement).toHaveAttribute('title');
    });
    test("Renders sitemap correctly", () => {
        const sitemapElement = screen.getByText('Sitemap');
        expect(sitemapElement).toBeInTheDocument();
        navLinks.forEach(({ name }) => {
            const linkElement = screen.getByText(name);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href');
            expect(linkElement).toHaveAttribute('title');
        });
    });
    test("Renders contact correctly", () => {
        const contactElement = screen.getByText('Contact');
        expect(contactElement).toBeInTheDocument();
        const mobileElement = screen.getByText(mobile);
        expect(mobileElement).toBeInTheDocument();
        expect(mobileElement).toHaveAttribute('href');
        expect(mobileElement.href).toMatch(/^tel:/);
        const emailElement = screen.getByText(email);
        expect(emailElement).toBeInTheDocument();
        expect(emailElement).toHaveAttribute('href');
        expect(emailElement.href).toMatch(/^mailto:/);
        const addressElement = screen.getByText(new RegExp(addressLine1));
        expect(addressElement).toBeInTheDocument();
        expect(addressElement).toHaveAttribute('href');
        expect(addressElement).toHaveAttribute('target');
        expect(addressElement.target).toBe('_blank');
        expect(addressElement).toHaveTextContent(addressLine2);
    });
    test("Renders socials correctly", () => {
        const socialsElement = screen.getByText('Follow us');
        expect(socialsElement).toBeInTheDocument();
        socials.forEach(({ name, link }) => {
            const socialElement = screen.getByAltText(name);
            expect(socialElement).toBeInTheDocument();
            expect(socialElement).toHaveAttribute('src');
            expect(socialElement).toHaveAttribute('title');
            expect(socialElement.parentElement).toHaveAttribute('href');
            expect(socialElement.parentElement.href).toMatch(link);
        });
    });
    test("Clicking on logo redirects to home page", () => {
        const logoElement = screen.getByAltText('logo');
        expect(logoElement).toBeInTheDocument();
        logoElement.click();
        expect(window.location.href).toMatch(/localhost\//);
    });
});
