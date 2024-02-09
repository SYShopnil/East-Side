// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { EventCard } from '@src/components/root';
import { eventCardData } from './config';

// EventCard
describe('EventCard', () => {
  let mainEventCard: HTMLElement | null;
  let titleElement: HTMLElement | null;
  let paraElement: HTMLElement | null;
  let imgElement: HTMLElement | null;
  let dateElement: HTMLElement | null;
  let locationElement: HTMLElement | null;
  let timeElement: HTMLElement | null;

  // beforeEach
  beforeEach(() => {
    render(<EventCard {...eventCardData} />);
  });

  // render EventCard
  it('renders a EventCard correctly', () => {
    mainEventCard = screen.getByTestId('EventCard');
    expect(mainEventCard).toBeInTheDocument();
  });
  // title
  it('render EventCard title correctly', () => {
    titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });
  // description
  it('render EventCard description correctly', () => {
    paraElement = screen.getByText(eventCardData?.description);
    expect(paraElement).toHaveTextContent(eventCardData?.description);
  });
  // descShowLine (line-clamp-)
  it('render EventCard line-clamp- class correctly', () => {
    paraElement = screen.getByText(eventCardData?.description);
    expect(paraElement).toHaveClass(
      `line-clamp-${eventCardData?.descShowLine}`
    );
  });
  // image
  it('render EventCard image correctly', () => {
    imgElement = screen.getByAltText(eventCardData?.imgAlt);
    expect(imgElement).toBeInTheDocument();
  });
  // event date
  it('render EventCard event date  correctly', () => {
    dateElement = screen.getByText(eventCardData?.eventDate);
    expect(dateElement).toHaveTextContent(eventCardData?.eventDate);
  });
  // event location
  it('render EventCard event location  correctly', () => {
    locationElement = screen.getByText(eventCardData?.eventLocation);
    expect(locationElement).toHaveTextContent(eventCardData?.eventLocation);
  });
  // event time
  it('render EventCard event time  correctly', () => {
    timeElement = screen.getByText(eventCardData?.eventTime);
    expect(timeElement).toHaveTextContent(eventCardData?.eventTime);
  });
});
