// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { TriggerButton } from '@src/components/root';
import { buttonTexts, colorSchemes } from './config';

// TriggerButton
describe('TriggerButton', () => {
  // render TriggerButton
  it('renders a TriggerButton correctly', () => {
    render(<TriggerButton buttonText="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  // buttonText
  describe.each(buttonTexts)('Button Text', (buttonText) => {
    it('applies correct text', () => {
      render(<TriggerButton buttonText={buttonText} />);
      const buttonElement = screen.getByText(buttonText);
      expect(buttonElement).toBeInTheDocument();
    });
  });

  // colorSchemes
  describe.each(colorSchemes)('colorScheme', (colorScheme) => {
    it(`applies correct colorScheme for ${colorScheme}`, () => {
      render(<TriggerButton buttonText="button" colorScheme={colorScheme} />);
      const buttonElement = screen.getByText('button');
      expect(buttonElement).toHaveClass(colorScheme);
    });
  });
});
