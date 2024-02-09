// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { TeamCard } from '@src/components/root';
import { teamCardData } from './config';

// TeamCard
describe('TeamCard', () => {
  let TeamCardMain: HTMLElement | null;
  let titleElement: HTMLElement | null;
  let paraElement: HTMLElement | null;
  let imgElement: HTMLElement | null;
  let linkedInElement: HTMLElement | null;

  // beforeEach
  beforeEach(() => {
    render(<TeamCard {...teamCardData} variant="primary" />);
  });

  // render Card
  it('renders a TeamCard correctly', () => {
    TeamCardMain = screen.getByTestId('TeamCard');
    expect(TeamCardMain).toBeInTheDocument();
  });
  // name
  it('render name correctly', () => {
    titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });
  // designation
  it('render designation correctly', () => {
    paraElement = screen.getByText(teamCardData?.designation);
    expect(paraElement).toHaveTextContent(teamCardData?.designation);
  });

  // linkedInLink
  it('render linkedInLink correctly', () => {
    linkedInElement = screen.getByTestId('linkedInLink');
    expect(linkedInElement).toBeInTheDocument();
  });

  // image
  it('render card image correctly', () => {
    imgElement = screen.getByAltText(teamCardData?.imgAlt);
    expect(imgElement).toBeInTheDocument();
  });
});
