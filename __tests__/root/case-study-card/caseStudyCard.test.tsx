import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { CaseStudyCard } from '@src/components/root';
import { testProps, textConfig, featuredConfig, winnerConfig } from './config';

describe('CTA Button', () => {
  beforeEach(() => {
    render(<CaseStudyCard {...testProps} />);
  });

  describe('Card Image', () => {
    let cardImage: HTMLImageElement;
    beforeEach(() => {
      cardImage = screen.getByRole('img');
    });

    it('renders correctly', () => {
      expect(cardImage).toBeInTheDocument();
    });

    it('applies image url correclty', async () => {
      await waitFor(() => {
        expect(cardImage).toHaveAttribute('src', testProps.imageUrl);
      });
    });

    it('applies image alt text correclty', () => {
      expect(cardImage).toHaveAttribute('alt', testProps.imageAltText);
    });
  });

  describe.each(textConfig)('$elementName', (config) => {
    let textElement: HTMLElement;
    beforeEach(() => {
      textElement = screen.getByTestId(config.elementId);
    });

    it('renders correctly', () => {
      expect(textElement).toBeInTheDocument();
    });

    it('renders correct text', () => {
      expect(textElement).toHaveTextContent(config.expectedText);
    });
  });

  describe.each(winnerConfig)('isWinner: %s', (config) => {
    let winnerTag: HTMLElement | null;
    beforeEach(() => {
      render(<CaseStudyCard {...testProps} isWinner={config} />);
      winnerTag = screen.queryByTestId('winner-tag');
    });

    it('renders correctly', () => {
      if (config) {
        expect(winnerTag).toBeInTheDocument();
      } else {
        expect(winnerTag).not.toBeInTheDocument();
      }
    });
  });
});
