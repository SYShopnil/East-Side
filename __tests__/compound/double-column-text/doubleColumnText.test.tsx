import { DoubleColumnText } from '@src/components/compound';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { doubleColumnTextConfigs } from './config';

describe.each(doubleColumnTextConfigs)('Double Column Text : %s', (con) => {
  const {
    bgType,
    title,
    subText,
    firstColumn,
    secondColumn,
    // cta-button
    ctaLink,
  } = con;

  beforeEach(() => {
    render(
      <DoubleColumnText
        bgType={bgType}
        title={title}
        subText={subText}
        firstColumn={firstColumn}
        secondColumn={secondColumn}
        ctaLink={ctaLink}
      />
    );
  });

  test('renders element correctly', () => {
    let textElement: HTMLElement | null;

    // first column
    textElement = screen.queryByTestId('double-column-first');
    expect(textElement).toBeInTheDocument();

    // second column
    textElement = screen.queryByTestId('double-column-second');
    expect(textElement).toBeInTheDocument();
  });

  describe('conditional test render', () => {
    test('component render title & subtext correctly', () => {
      let textElement: HTMLElement | null;
      textElement = screen.queryByTestId('double-column-title');

      if (title) {
        expect(textElement).toBeInTheDocument();
      } else {
        expect(textElement).not.toBeInTheDocument();
      }

      textElement = screen.queryByTestId('double-column-subText');

      if (subText) {
        expect(textElement).toBeInTheDocument();
      } else {
        expect(textElement).not.toBeInTheDocument();
      }
    });

    // test('component render ctalink correctly', () => {
    //   let ctalinkEl: HTMLElement | null;

    //   ctalinkEl = screen.queryByTestId('contact-block-ctalink');

    //   if (ctaLink.ctaText) {
    //     expect(ctalinkEl).toBeInTheDocument();
    //   } else {
    //     expect(ctalinkEl).not.toBeInTheDocument();
    //   }
    // });
  });
});
