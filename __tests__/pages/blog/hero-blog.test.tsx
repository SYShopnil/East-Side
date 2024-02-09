import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { HeroSection } from '@src/components/pages/blog/heroSection';
import { heroProps, heroTextConfig } from './config';

describe('Hero - Blog', () => {
  let heroSection: HTMLElement;
  beforeAll(() => {
    render(<HeroSection {...heroProps} />);
    heroSection = screen.getByTestId('hero-blog');
  });

  it('renders correctly', () => {
    expect(heroSection).toBeInTheDocument();
  });

  it('applies correct background image', () => {
    waitFor(() => {
      expect(heroSection).toHaveStyle(
        `backgroundImage: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroProps.bgImageUrl})`
      );
    });
  });

  describe.each(heroTextConfig)('$elementName', (config) => {
    let testElement: HTMLElement;
    beforeAll(() => {
      render(<HeroSection {...heroProps} />);
      testElement = screen.getByTestId(config.testId);
    });

    it('renders correctly', () => {
      expect(testElement).toBeInTheDocument();
    });

    it('renders correct text', () => {
      expect(testElement).toHaveTextContent(config.expectedText);
    });
  });

  describe('Author Avatar', () => {
    let authorAvatar: HTMLImageElement;
    beforeAll(() => {
      render(<HeroSection {...heroProps} />);
      authorAvatar = screen.getByTestId('author-avatar');
    });

    it('renders correctly', () => {
      expect(authorAvatar).toBeInTheDocument();
    });

    it('applies correct url', () => {
      waitFor(() => {
        expect(authorAvatar).toHaveAttribute('src', heroProps.authorAvatarUrl);
      });
    });

    it('applies correct alt text', () => {
      expect(authorAvatar).toHaveAttribute('alt', heroProps.authorAvatarAlt);
    });
  });
});
