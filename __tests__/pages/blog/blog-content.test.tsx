import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BlogContent } from '@src/components/pages/blog/blogContent';
import { blogProps, blogTextConfig } from './config';

describe('Hero - Blog', () => {
  let blogContent: HTMLElement;
  beforeAll(() => {
    render(<BlogContent {...blogProps} />);
    blogContent = screen.getByTestId('blog-content');
  });

  it('renders correctly', () => {
    expect(blogContent).toBeInTheDocument();
  });

  describe('Meta Tags', () => {
    beforeAll(() => {
      render(<BlogContent {...blogProps} />);
    });

    it('renders metaTags correctly', () => {
      expect(screen.getByTestId('blog-metaTags')).toBeInTheDocument();
    });
  });

  describe.each(blogTextConfig)('$elementName', (config) => {
    let testElement: HTMLElement;
    beforeAll(() => {
      render(<BlogContent {...blogProps} />);
      testElement = screen.getByTestId(config.testId);
    });

    it('renders correctly', () => {
      expect(testElement).toBeInTheDocument();
    });

    it('renders correct text', () => {
      expect(testElement).toHaveTextContent(config.expectedText);
    });
  });
});
