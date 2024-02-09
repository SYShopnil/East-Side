import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { FooterAddress } from '@src/components/root';
import {
  footerAddressTypes,
  parentBgTypes,
  textConfig,
  logoConfig,
} from './config';
import { fontColorSelector } from '@src/utils';

describe.each(footerAddressTypes)('Footer Address Type: %s', (footerType) => {
  beforeEach(() => {
    render(
      <FooterAddress
        footerAddressType={footerType}
        parentBgType="default"
        mainLogoUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg"
        mainLogoAlt="Eastside Co"
        contactNumber="020 7856 0270"
        emailAddress="info@eastsideco.com"
        physicalAddress="Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK"
        partnerLogo1WhiteUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg"
        partnerLogo1DarkUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-plus-dark.svg"
        partnerLogo1Alt="Sopify Plus"
        partnerLogo2DarkUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg"
        partnerLogo2WhiteUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg"
        partnerLogo2Alt="Shopify Experts"
        copyrightText="Copyright © 2022 Eastside Co"
      />
    );
  });

  describe.each(textConfig)('$testElement', (config) => {
    let textElement: HTMLElement | null;
    beforeEach(() => {
      textElement = screen.queryByTestId(config.dataTestId);
    });

    it('renders element correctly', () => {
      if (footerType == 'mega-menu' && config.testElement == 'Copyright Text') {
        expect(textElement).not.toBeInTheDocument();
      } else {
        expect(textElement).toBeInTheDocument();
      }
    });

    it('renders correct text', () => {
      if (textElement !== null) {
        expect(textElement).toHaveTextContent(config.expectedText);
      }
    });
  });

  describe.each(logoConfig)('$testElement', (config) => {
    let logoElement: HTMLElement | null;
    beforeEach(() => {
      logoElement = screen.queryByAltText(config.altText);
    });

    it('renders element correctly', () => {
      if (footerType == 'mega-menu' && config.testElement == 'Main Logo') {
        expect(logoElement).not.toBeInTheDocument();
      } else {
        expect(logoElement).toBeInTheDocument();
      }
    });
  });
});

describe.each(logoConfig)('$testElement', (config) => {
  describe.each(parentBgTypes)('Parent Background: %s', (bgType) => {
    let expectedUrl: string;
    let logoElement: HTMLElement | null;
    beforeEach(() => {
      render(
        <FooterAddress
          footerAddressType="footer"
          parentBgType={bgType}
          mainLogoUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/df45afd43358ae67149bd5f033172acd23a5dc3c/footer-esc-logo.svg"
          mainLogoAlt="Eastside Co"
          contactNumber="020 7856 0270"
          emailAddress="info@eastsideco.com"
          physicalAddress="Eastside Co, 8 Ganton Street, Carnaby, London, W1F 7QW, UK"
          partnerLogo1WhiteUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-plus-white.svg"
          partnerLogo1DarkUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-plus-dark.svg"
          partnerLogo1Alt="Sopify Plus"
          partnerLogo2DarkUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/1b777af065a21c096405abb79a5319440705e466/shopify-partners-dark.svg"
          partnerLogo2WhiteUrl="https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/90b9e794cea6241d55897d4dff1dd01dcc301c25/shopify-partners-white.svg"
          partnerLogo2Alt="Shopify Experts"
          copyrightText="Copyright © 2022 Eastside Co"
        />
      );

      expectedUrl =
        fontColorSelector(bgType) === '#212121'
          ? config.darkUrl
          : config.whiteUrl;

      logoElement = screen.queryByAltText(config.altText);
    });

    it('applies correct url', async () => {
      await waitFor(() => {
        expect(logoElement).toHaveAttribute('src', expectedUrl);
      });
    });
  });
});
