// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { SectionHeading } from '@src/components/compound/section-heading';
import { sectionHeadingData } from './config';

// SectionHeading
describe('SectionHeading', () => {
  // render SectionHeading
  it('renders a SectionHeading correctly', () => {
    render(
      <SectionHeading
        title={sectionHeadingData?.title}
        subTitle={sectionHeadingData?.subTitle}
      />
    );
    const titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });

  // subTitle
  it('applies correct subTitle', () => {
    render(
      <SectionHeading
        title={sectionHeadingData?.title}
        subTitle={sectionHeadingData?.subTitle}
      />
    );
    const subTitleElement = screen.getByText(sectionHeadingData?.subTitle);
    expect(subTitleElement).toHaveTextContent(sectionHeadingData?.subTitle);
  });

  // title
  it('applies correct title', () => {
    render(
      <SectionHeading
        title={sectionHeadingData?.title}
        subTitle={sectionHeadingData?.subTitle}
      />
    );
    const titleElement = screen.getByText(sectionHeadingData?.title);
    expect(titleElement).toHaveTextContent(sectionHeadingData?.title);
  });

  // description
  it('applies correct description', () => {
    render(
      <SectionHeading
        title={sectionHeadingData?.title}
        subTitle={sectionHeadingData?.subTitle}
        description={sectionHeadingData?.description}
      />
    );
    const descriptionElement = screen.getByText(
      sectionHeadingData?.description
    );
    expect(descriptionElement).toHaveTextContent(
      sectionHeadingData?.description
    );
  });

  // render cta
  it('renders a cta correctly', () => {
    render(
      <SectionHeading
        title={sectionHeadingData?.title}
        subTitle={sectionHeadingData?.subTitle}
        ctaInfo={sectionHeadingData?.ctaInfo}
      />
    );
    const ctaElement = screen.getByText(sectionHeadingData?.ctaInfo?.ctaText);
    expect(ctaElement).toBeInTheDocument();
  });
});
