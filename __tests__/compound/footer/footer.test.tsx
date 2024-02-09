import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '@src/components/compound';
import { testConfig, formConfig, columnConfig } from './config';

describe('Footer', () => {
  let footer: HTMLElement;
  beforeEach(() => {
    render(<Footer {...testConfig} />);
    footer = screen.getByRole('contentinfo');
  });

  it('renders correctly', () => {
    expect(footer).toBeInTheDocument();
  });

  it('applies correct background', () => {
    expect(footer).toHaveStyle('background: #000000');
  });

  describe('Subscription Form', () => {
    it('displays form correctly', () => {
      expect(
        screen.getByTestId('footer-subscription-form')
      ).toBeInTheDocument();
    });

    it('displays subscriber name input field correctly', () => {
      expect(
        screen.getByTestId('footer-subscription-form')
      ).toBeInTheDocument();
    });

    it('displays subscriber email input filed correctly', () => {
      expect(
        screen.getByTestId('footer-subscription-form')
      ).toBeInTheDocument();
    });

    it('displays subscribe button correctly', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    describe.each(formConfig)('$elementName', (config) => {
      let testElement: HTMLElement;
      beforeEach(() => {
        testElement = screen.getByTestId(config.dataTestid);
      });

      it('displays correclty', () => {
        expect(testElement).toBeInTheDocument();
      });

      it('displays correct text', () => {
        expect(testElement).toHaveTextContent(config.expectedText);
      });
    });
  });

  describe('Footer Columns', () => {
    it('displays correct number of columns', () => {
      expect(screen.getAllByTestId('footer-column-container')).toHaveLength(3);
    });

    describe.each(columnConfig)('$elementName', (config) => {
      let testElement: HTMLElement;
      beforeEach(() => {
        testElement = screen.getByTestId(config.dataTestId);
      });

      it('displays correctly', () => {
        expect(testElement).toBeInTheDocument();
      });

      it('displays correct title', () => {
        expect(
          screen.getAllByTestId('footer-column-title').at(config.index)
        ).toHaveTextContent(config.expectedTitle);
      });
    });
  });

  describe('Footer Address', () => {
    it('displays correctly', () => {
      expect(screen.getByTestId('footer-address')).toBeInTheDocument();
    });
  });
});
