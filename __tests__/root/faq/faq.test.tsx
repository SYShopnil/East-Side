import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { faqConfigs } from './config';
import { Faq } from '@src/components/root';

describe.each(faqConfigs)('Faq: %s', (con) => {
  const { faqs } = con;

  beforeEach(() => {
    render(<Faq faqs={faqs} />);
  });

  test('faq expanding as expected', () => {
    let el: HTMLElement | null;
    let icon: HTMLElement | null;

    fireEvent.click(screen.queryAllByTestId('faq-title').at(0)!);
    el = screen.queryByTestId('faq-subText');
    icon = screen.queryByTestId('faq-minus-icon');

    expect(el).toBeInTheDocument();
    expect(icon).toBeInTheDocument();

    fireEvent.click(screen.queryAllByTestId('faq-title').at(0)!);

    el = screen.queryByTestId('faq-subText');
    icon = screen.queryByTestId('faq-minus-icon');
    expect(el).not.toBeInTheDocument();
    expect(icon).not.toBeInTheDocument();

    icon = screen.queryAllByTestId('faq-plus-icon').at(0)!;
    expect(icon).toBeInTheDocument();
  });
});
