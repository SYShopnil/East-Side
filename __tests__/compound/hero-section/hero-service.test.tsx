import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeroService } from '@src/components/compound';
import { servicesProps, servicesTextConfig } from './config';

describe('Hero Primary', () => {
  let heroSection: HTMLElement;
  beforeAll(() => {
    render(<HeroService {...servicesProps} />);
    heroSection = screen.getByTestId('hero-service-container');
  });

  it('renders correctly', () => {
    expect(heroSection).toBeInTheDocument();
  });

  it('applies correct background image', () => {
    expect(heroSection).toHaveStyle(
      `backgroundImage: url(${servicesProps.backgroundImageUrl})`
    );
  });

  describe.each(servicesTextConfig)('$elementName', (config) => {
    let testElement: HTMLElement;
    beforeAll(() => {
      render(<HeroService {...servicesProps} />);
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
    beforeAll(() => {
      render(<HeroService {...servicesProps} />);
      featuredImage = screen.getByTestId('featured-image');
    });

    it('renders correctly', () => {
      expect(featuredImage).toBeInTheDocument();
    });

    it('renders correct image', () => {
      expect(featuredImage).toHaveAttribute(
        'src',
        servicesProps.featuredImageUrl
      );
    });

    it('applies correct image alt', () => {
      expect(featuredImage).toHaveAttribute(
        'alt',
        servicesProps.featuredImageAlt
      );
    });
  });
});
