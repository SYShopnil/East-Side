import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { HeroQuaternary } from '@src/components/compound';
import {
  quaternaryProps,
  quaternaryTextConfig,
  quaternaryImageConfig,
  bgTypes,
} from './config';

describe('Hero Primary', () => {
  let heroSection: HTMLElement;
  beforeAll(() => {
    render(<HeroQuaternary {...quaternaryProps} />);
    heroSection = screen.getByTestId('hero-section');
  });

  it('renders correctly', () => {
    expect(heroSection).toBeInTheDocument();
  });

  it.each(bgTypes)('applies correct background: %s', (bgType) => {
    render(<HeroQuaternary {...quaternaryProps} bgType={bgType} />);
    heroSection = screen.getByTestId('hero-section');
    if (bgType === 'image' && quaternaryProps.bgImageUrl) {
      waitFor(() => {
        expect(heroSection).toHaveStyle(
          `backgroundImage: url(${quaternaryProps.bgImageUrl})`
        );
      });
    } else {
      expect(heroSection).toHaveStyle(
        `backgroundImage: linear-gradient(67.96deg, #4229EF -3.51%, #2BB8E4 254.73%)`
      );
    }
  });

  describe.each(quaternaryImageConfig)('$elementName', (config) => {
    let testElement: HTMLImageElement;
    beforeAll(async () => {
      render(<HeroQuaternary {...quaternaryProps} />);
      await waitFor(() => {
        testElement = screen.getByTestId(config.testId);
      });
    });

    it('renders correctly', () => {
      expect(testElement).toBeInTheDocument();
    });

    it('applies correct url', () => {
      expect(testElement).toHaveAttribute('src', config.expectedUrl);
    });

    it('applies correct alt text', () => {
      expect(testElement).toHaveAttribute('alt', config.expectedAlt);
    });
  });

  describe.each(quaternaryTextConfig)('$elementName', (config) => {
    let testElement: HTMLElement;
    beforeAll(() => {
      render(<HeroQuaternary {...quaternaryProps} />);
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
