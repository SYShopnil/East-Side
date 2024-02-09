// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { RedirectButton } from '@src/components/root';
import { buttonLinks, buttonTexts, colorSchemes } from './config';

// RedirectButton
describe('RedirectButton', () => {
  // render RedirectButton
  it('renders a RedirectButton correctly', () => {
    render(
      <RedirectButton buttonText="button" link="https://www.google.com" />
    );
    const buttonElement = screen.getByRole('link');
    expect(buttonElement).toBeInTheDocument();
  });

  // link
  describe.each(buttonLinks)('Button Link', (buttonLink) => {
    it('applies correct link', () => {
      render(<RedirectButton buttonText="button" link={buttonLink} />);
      const buttonElement = screen.getByRole('link');
      expect(buttonElement).toHaveAttribute('href', buttonLink);
    });
  });

  // Link Open New Tab
  it('applies correct target', () => {
    render(<RedirectButton buttonText="button" link="/" linkOpenNewTab />);
    const buttonElement = screen.getByRole('link');
    expect(buttonElement).toHaveAttribute('target', '_blank');
  });

  // buttonText
  describe.each(buttonTexts)('Button Text', (buttonText) => {
    it('applies correct text', () => {
      render(<RedirectButton link="" buttonText={buttonText} />);
      const buttonElement = screen.getByText(buttonText);
      expect(buttonElement).toBeInTheDocument();
    });
  });
  // colorSchemes
  describe.each(colorSchemes)('colorScheme', (colorScheme) => {
    it(`applies correct colorScheme for ${colorScheme}`, () => {
      render(
        <RedirectButton link="" buttonText="button" colorScheme={colorScheme} />
      );
      const buttonElement = screen.getByText('button');
      expect(buttonElement).toHaveClass(colorScheme);
    });
  });
});
