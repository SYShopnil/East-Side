// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { LocationCard } from '@src/components/root';
import { locationCardData } from './config';

// LocationCard
describe('LocationCard', () => {
  let locationCard: HTMLElement | null;
  let titleElement: HTMLElement | null;
  let paraElement: HTMLElement | null;
  let imgElement: HTMLElement | null;

  // beforeEach
  beforeEach(() => {
    render(<LocationCard {...locationCardData} />);
  });

  // render LocationCard
  it('renders a Card correctly', () => {
    locationCard = screen.getByTestId('locationCard');
    expect(locationCard).toBeInTheDocument();
  });
  // title
  it('render card title correctly', () => {
    titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });
  // description
  it('render card description correctly', () => {
    paraElement = screen.getByText(locationCardData?.description);
    expect(paraElement).toHaveTextContent(locationCardData?.description);
  });
  // image
  it('render card image correctly', () => {
    imgElement = screen.getByAltText(locationCardData?.imgAlt);
    expect(imgElement).toBeInTheDocument();
  });
});
