// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { Card } from '@src/components/root';
import { cardData } from './config';

// Card
describe('Card', () => {
  let mainCard: HTMLElement | null;
  let titleElement: HTMLElement | null;
  let paraElement: HTMLElement | null;
  let imgElement: HTMLElement | null;

  // beforeEach
  beforeEach(() => {
    render(<Card {...cardData} />);
  });

  // render Card
  it('renders a Card correctly', () => {
    mainCard = screen.getByTestId('main-card');
    expect(mainCard).toBeInTheDocument();
  });
  // title
  it('render card title correctly', () => {
    titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });
  // description
  it('render card description correctly', () => {
    paraElement = screen.getByText(cardData?.description);
    expect(paraElement).toHaveTextContent(cardData?.description);
  });
  // descShowLine (line-clamp-)
  it('render card line-clamp- class correctly', () => {
    paraElement = screen.getByText(cardData?.description);
    expect(paraElement).toHaveClass(`line-clamp-${cardData?.descShowLine}`);
  });
  // image
  it('render card image correctly', () => {
    imgElement = screen.getByAltText(cardData?.imgAlt);
    expect(imgElement).toBeInTheDocument();
  });
});
