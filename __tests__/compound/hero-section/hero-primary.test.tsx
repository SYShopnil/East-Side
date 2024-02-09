import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { HeroPrimary } from '@src/components/compound';
import { primaryProps, bgTypes, primaryTextConfig } from './config';

describe('Hero Primary', () => {
  let heroSection: HTMLElement;
  beforeAll(() => {
    render(<HeroPrimary {...primaryProps} />);
    heroSection = screen.getByTestId('hero-section');
  });

  it('renders correctly', () => {
    expect(heroSection).toBeInTheDocument();
  });

  it.each(bgTypes)('applies correct background: %s', (bgType) => {
    render(<HeroPrimary {...primaryProps} bgType={bgType} />);
    heroSection = screen.getByTestId('hero-section');
    if (bgType === 'image' && primaryProps.backgroundImageUrl) {
      waitFor(() => {
        expect(heroSection).toHaveStyle(
          `backgroundImage: url(${primaryProps.backgroundImageUrl})`
        );
      });
    } else {
      expect(heroSection).toHaveStyle(
        `backgroundImage: linear-gradient(67.96deg, #4229EF -3.51%, #2BB8E4 254.73%)`
      );
    }
  });

  describe.each(primaryTextConfig)('$elementName', (config) => {
    let testElement: HTMLElement;
    beforeAll(() => {
      render(<HeroPrimary {...primaryProps} />);
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
