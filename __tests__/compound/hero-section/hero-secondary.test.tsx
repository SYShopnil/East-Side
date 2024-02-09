import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeroSecondary } from '@src/components/compound';
import { secondaryProps, secondaryTextConfig } from './config';

describe('Hero Secondary', () => {
  let heroSection: HTMLElement;
  beforeAll(() => {
    render(<HeroSecondary {...secondaryProps} />);
    heroSection = screen.getByTestId('hero-secondary-section');
  });

  it('renders correctly', () => {
    expect(heroSection).toBeInTheDocument();
  });

  it('applies correct backfground', () => {
    expect(heroSection).toHaveStyle(
      'background: linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)'
    );
  });

  describe.each(secondaryTextConfig)('$elementName', (config) => {
    let testElement: HTMLElement;
    beforeAll(() => {
      render(<HeroSecondary {...secondaryProps} />);
      testElement = screen.getByTestId(config.testId);
    });

    it('renders correctly', () => {
      expect(testElement).toBeInTheDocument();
    });

    it('renders correct text', () => {
      expect(testElement).toHaveTextContent(config.expectedText);
    });
  });
});
