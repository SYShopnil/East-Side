import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CtaLink } from '@src/components/root';

describe('CTA Button', () => {
  let ctaLink: HTMLElement;
  beforeEach(() => {
    render(<CtaLink ctaLink="/" ctaText="Click Me" />);
    ctaLink = screen.getByRole('link');
  });

  it('renders correctly', () => {
    expect(ctaLink).toBeInTheDocument();
  });

  it('applies correct link', () => {
    expect(ctaLink).toHaveAttribute('href', '/');
  });

  it('displays correct text', () => {
    expect(ctaLink).toHaveTextContent('Click Me');
  });

  it('displays CTA arrow icon correctly', () => {
    expect(screen.getByTestId('right-arrow-icon')).toBeInTheDocument();
  });
});
