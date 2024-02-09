import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CenterContentBlock } from '@src/components/compound';
import { textConfig, backgroundConfig } from './config';

describe('Center Content Block', () => {
  describe.each(textConfig)('$testElement', (config) => {
    let textElement: HTMLElement;
    beforeAll(() => {
      render(
        <CenterContentBlock
          title="Shopify stores we work with"
          subText="WHY SHOPIFY PLUS?"
          description="<tg>Shopify Plus<tg> is an enterprise <tg>platform<tg> that powers the world’s fastest growing brands. It gives merchants a multi-channel platform with unmatched scalability so you can concentrate on running your business, while it takes care of areas such as order management, complex discounting, payment gateways and other features that rapidly scaling retailers need. As well as this, Shopify Plus has unrivalled security and can handle limitless volumes of traffic and sales."
          bgType="default"
        />
      );
      textElement = screen.getByTestId(config.dataTestId);
    });

    it('displays element correctly', () => {
      expect(textElement).toBeInTheDocument();
    });

    it('displays correct text', () => {
      expect(textElement).toHaveTextContent(config.expectedText);
    });
  });

  describe.each(backgroundConfig)('Background Type: $bgType', (config) => {
    beforeAll(() => {
      render(
        <CenterContentBlock
          description="Demo Description with `Highlighted Text`. It is another `Highlighted Text.`"
          bgType={config.bgType}
        />
      );
    });

    it(`applies background color correctly [${config.expectedStyle}]`, () => {
      expect(screen.getByTestId('center-content-container')).toHaveStyle(
        config.expectedStyle
      );
    });
  });
});
