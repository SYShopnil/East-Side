import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@src/components/pages/team-member/heroSection';
import { heroProps, heroTextConfig } from './config';

describe('Hero - Team Member', () => {
  let heroSection: HTMLElement;
  beforeAll(() => {
    render(<HeroSection {...heroProps} />);
    heroSection = screen.getByTestId('hero-team');
  });

  it('renders correctly', () => {
    expect(heroSection).toBeInTheDocument();
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

  describe('Linked In CTA', () => {
    let linkedInCTA: HTMLElement;
    beforeAll(() => {
      render(<HeroSection {...heroProps} />);
      linkedInCTA = screen.getByTestId('linkedin');
    });
    it('renders correctly', () => {
      expect(linkedInCTA).toBeInTheDocument();
    });

    it('applies correct link', () => {
      expect(linkedInCTA).toHaveAttribute('href', heroProps.linkedInUrl);
    });
  });

  describe('Member Image', () => {
    let memberImage: HTMLImageElement;
    beforeAll(() => {
      render(<HeroSection {...heroProps} />);
      memberImage = screen.getByTestId('member-image');
    });

    it('renders correctly', () => {
      expect(memberImage).toBeInTheDocument();
    });

    it('applies correct image url', () => {
      expect(memberImage).toHaveAttribute('src', heroProps.memberImageUrl);
    });

    it('applies correct alt text', () => {
      expect(memberImage).toHaveAttribute('alt', heroProps.memberImageAlt);
    });
  });
});
