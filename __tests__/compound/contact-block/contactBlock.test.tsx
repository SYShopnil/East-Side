import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { IRedirectButton } from '@src/types/root/button';
import { contactBlockConfigs } from './config';
import { ContactBlock } from '@src/components/compound';

describe.each(contactBlockConfigs)('Contact Block: %s', (con) => {
  const {
    bgType,
    title,
    subTitle,
    description,

    emailAddress,
    contactNumber,

    // cta-button
    ctaLink,

    // redirect-buttons
    buttonOne,
    buttonTwo,
  } = con;

  beforeEach(() => {
    render(
      <ContactBlock
        bgType={bgType}
        title={title}
        subTitle={subTitle}
        description={description}
        emailAddress={emailAddress}
        contactNumber={contactNumber}
        ctaLink={ctaLink}
        buttonOne={buttonOne as IRedirectButton}
        buttonTwo={buttonTwo as IRedirectButton}
      />
    );
  });

  test('renders element correctly', () => {
    let textElement: HTMLElement | null;

    // title
    textElement = screen.queryByTestId('contact-block-title');
    expect(textElement).toBeInTheDocument();

    // description
    textElement = screen.queryByTestId('contact-block-description');
    expect(textElement).toBeInTheDocument();
  });

  describe('conditional test render', () => {
    test('component render subtitle correctly', () => {
      let textElement: HTMLElement | null;
      textElement = screen.queryByTestId('contact-block-subtitle');

      if (subTitle) {
        expect(textElement).toBeInTheDocument();
      } else {
        expect(textElement).not.toBeInTheDocument();
      }
    });

    test('component render contact details correctly', () => {
      let emailEl: HTMLElement | null;
      let phoneEl: HTMLElement | null;

      emailEl = screen.queryByTestId('contact-block-email');
      phoneEl = screen.queryByTestId('contact-block-number');

      if (emailEl || phoneEl) {
        expect(emailEl).toBeInTheDocument();
        expect(phoneEl).toBeInTheDocument();
      } else {
        expect(emailEl).not.toBeInTheDocument();
        expect(phoneEl).not.toBeInTheDocument();
      }
    });

    test('component render button correctly', () => {
      let buttonOneEl: HTMLElement | null;
      let buttonTwoEl: HTMLElement | null;

      buttonOneEl = screen.queryByTestId('contact-block-button-one');
      buttonTwoEl = screen.queryByTestId('contact-block-button-two');

      // button one 
      if (buttonOne.buttonText) {
        expect(buttonOneEl).toBeInTheDocument();
      } else {
        expect(buttonOneEl).not.toBeInTheDocument();
      }

      // button two
      if (buttonTwo?.buttonText) {
        expect(buttonTwoEl).toBeInTheDocument();
      } else {
        expect(buttonTwoEl).not.toBeInTheDocument();
      }
    });

    test('component render ctalink correctly', () => {
      let ctalinkEl: HTMLElement | null;

      ctalinkEl = screen.queryByTestId('contact-block-button-ctalink');

      if (ctaLink.ctaText) {
        expect(ctalinkEl).toBeInTheDocument();
      } else {
        expect(ctalinkEl).not.toBeInTheDocument();
      }
    });
  });
});
