import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { blockConfigs } from './config';
// import { fontColorSelector } from '@src/utils';
import { IRedirectButton } from '@src/types/root/button';
import { ContentBlock } from '@src/components/compound';
import { contentBlockType } from '@src/types/compound/content-block';

describe.each(blockConfigs)('Content Block: %s', (con) => {
  const {
    sectionBgType,
    blockType,
    title,
    subTitle,
    description,
    logo,
    logoPosition,
    // link,
    // linkOpenNewTab,
    // buttonText,
    // colorScheme,
    button,
    // button: { link, linkOpenNewTab, buttonText, colorScheme } = {},
    ctaLink,
    isSlider,
  } = con;

  beforeEach(() => {
    render(
      <ContentBlock
        isSlider={isSlider}
        sectionBgType={sectionBgType}
        blockType={blockType as contentBlockType}
        title={title}
        subTitle={subTitle}
        description={description}
        // logo
        logo={logo}
        logoPosition={logoPosition}
        // cta link
        ctaLink={ctaLink}
        button={button as IRedirectButton}
      />
    );
  });

  test('renders element correctly', () => {
    let textElement: HTMLElement | null;

    // description
    textElement = screen.queryByTestId('content-block-description');
    expect(textElement).toBeInTheDocument();

    // subtitle
    textElement = screen.queryByTestId('content-block-subtitle');
    expect(textElement).toBeInTheDocument();
  });

  describe('conditional test render of head type', () => {
    if (blockType == 'head') {
      test('component render title correctly', () => {
        let textElement: HTMLElement | null;
        textElement = screen.queryByTestId('content-block-title');

        expect(textElement).toBeInTheDocument();
      });

      test('component render button correctly', () => {
        let buttonElement: HTMLElement | null;
        buttonElement = screen.queryByTestId('content-block-button');

        if (button.buttonText) {
          expect(buttonElement).toBeInTheDocument();
        } else {
          expect(buttonElement).not.toBeInTheDocument();
        }
      });
    }
  });

  describe('conditional test render of list type', () => {
    if (blockType == 'list') {
      //   cta-links
      test('component shows  cta links as expected', () => {
        let ctaLinkEl: HTMLElement | null;
        ctaLinkEl = screen.queryByTestId('content-block-ctalink');

        if (ctaLink.ctaText) {
          expect(ctaLinkEl).toBeInTheDocument();
        } else {
          expect(ctaLinkEl).not.toBeInTheDocument();
        }
      });

      //   logo
      test('component display logo as expected', () => {
        let logoEl: HTMLElement | null;
        logoEl = screen.queryByTestId('content-block-logo');

        if (logo && logoPosition) {
          let logoPositionEl: HTMLElement | null;
          logoPositionEl = screen.queryByTestId('content-block-logo-position');

          if (logoPosition == 'top') {
            expect(logoPositionEl?.getAttribute('class')).toContain('flex-col');
          } else {
            expect(logoPositionEl?.getAttribute('class')).toContain('flex-row');
          }
        } else if (logo) {
          expect(logoEl).toBeInTheDocument();
        } else {
          expect(logoEl).not.toBeInTheDocument();
        }
      });
    }
  });
});

// blockType={con.blockType as contentBlockType}
// title="Services provided by our 100+ shopify experts"
// subTitle="How we’ll work with you"
// description="We help ambitious brands flourish in Shopify through ecommerce strategy, design, development and performance marketing."
// logo="https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg"
// logoPosition="top"
// // cta-button
// ctaLink={{
//   ctaLink:
//     'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
//   ctaText: 'Let’s start planning',
//   parentBgType: 'black',
// }}
// // redirect-button
// link="https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react"
// linkOpenNewTab={false}
// buttonText="explore our services"
// colorScheme="white_over_blue"
