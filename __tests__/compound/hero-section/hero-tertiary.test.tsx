import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { HeroTertiary } from '@src/components/compound';
import { tertiaryProps, tertiaryTextConfig } from './config';

describe('Hero Primary', () => {
  let heroSection: HTMLElement;
  beforeAll(() => {
    render(<HeroTertiary {...tertiaryProps} />);
    heroSection = screen.getByTestId('hero-section');
  });

  it('renders correctly', () => {
    expect(heroSection).toBeInTheDocument();
  });

  describe.each(tertiaryTextConfig)('$elementName', (config) => {
    let testElement: HTMLElement;
    beforeAll(() => {
      render(<HeroTertiary {...tertiaryProps} />);
      testElement = screen.getByTestId(config.testId);
    });

    it('renders correctly', () => {
      expect(testElement).toBeInTheDocument();
    });

    it('renders correct text', () => {
      expect(testElement).toHaveTextContent(config.expectedText);
    });
  });

  describe('Featured Image', () => {
    let featuredImage: HTMLImageElement;
    beforeAll(async () => {
      render(<HeroTertiary {...tertiaryProps} />);
      await waitFor(() => {
        featuredImage = screen.getByTestId('featured-image');
      });
    });

    it('renders correctly', () => {
      expect(featuredImage).toBeInTheDocument();
    });

    it('applies correct image url', () => {
      expect(featuredImage).toHaveAttribute(
        'src',
        tertiaryProps.featuredImageUrl
      );
    });

    it('applies correct alt text', () => {
      expect(featuredImage).toHaveAttribute(
        'alt',
        tertiaryProps.featuredImageAlt
      );
    });
  });
});
