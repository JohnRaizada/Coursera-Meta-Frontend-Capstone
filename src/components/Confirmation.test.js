import { render, screen ,cleanup} from '@testing-library/react';
import Confirmation from './Confirmation';

describe('Confirmation', () => {
    beforeAll(() => {
        render(<Confirmation />);
    });
    afterAll(() => {
        jest.clearAllMocks();
        cleanup();
    });
    test('Renders Confirmation component', () => {
        const greetElement = screen.getByText('Thank you');
        const describeElement = screen.getByText('Your reservation is confirmed!');
        expect(greetElement).toBeInTheDocument();
        expect(describeElement).toBeInTheDocument();
    });
});
