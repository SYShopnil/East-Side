import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Testimonial } from '@src/components/compound';
import { textConfig, imageConfig } from './config';

describe('Testimonial', () => {
  describe.each(textConfig)('$elementName', (config) => {
    let element: HTMLElement;
    beforeAll(() => {
      render(
        <Testimonial
          quote={config.text}
          quoteeName={config.text}
          quoteeDesignation={config.text}
          subTitle={config.text}
          bgType="default"
        />
      );
      element = screen.getByTestId(config.dataTestid);
    });

    it('displays correct text', () => {
      expect(element).toHaveTextContent(config.text);
    });
  });

  describe.each(imageConfig)('$altText', (config) => {
    let element: HTMLElement;
    beforeEach(() => {
      render(
        <Testimonial
          quote="Demo Quote"
          quoteeName="Demo Quotee Name"
          bgType="solid"
          partnerLogoUrl={config.url}
          partnerLogoAlt="Partner Logo"
          quoteeCompanyLogoUrl={config.url}
          quoteeCompanyLogoAlt="Quotee Company Logo"
        />
      );
      element = screen.getByAltText(config.altText);
    });

    it('renders correctly', () => {
      expect(element).toBeInTheDocument();
    });

    it('passes correct URL', async () => {
      await waitFor(() => {
        expect(element).toHaveAttribute('src', config.url);
      });
    });
  });
});
