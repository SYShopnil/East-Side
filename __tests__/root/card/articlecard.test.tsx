// External Imports
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Internal Imports
import { ArticleCard } from '@src/components/root';
import { articleCardData, podcastCardData } from './config';

// ArticleCard
describe('ArticleCard', () => {
  let mainArticleCard: HTMLElement | null;
  let titleElement: HTMLElement | null;
  let paraElement: HTMLElement | null;
  let imgElement: HTMLElement | null;
  let authorNameElement: HTMLElement | null;
  let tagElement: HTMLElement | null;
  let dateElement: HTMLElement | null;
  let durationElement: HTMLElement | null;

  // beforeEach
  beforeEach(() => {
    render(<ArticleCard {...articleCardData} />);
  });

  // render ArticleCard
  it('renders a ArticleCard correctly', () => {
    mainArticleCard = screen.getByTestId('ArticleCard');
    expect(mainArticleCard).toBeInTheDocument();
  });
  // title
  it('render ArticleCard title correctly', () => {
    titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });
  // description
  it('render ArticleCard description correctly', () => {
    paraElement = screen.getByText(articleCardData?.description);
    expect(paraElement).toHaveTextContent(articleCardData?.description);
  });
  // descShowLine (line-clamp-)
  it('render ArticleCard line-clamp- class correctly', () => {
    paraElement = screen.getByText(articleCardData?.description);
    expect(paraElement).toHaveClass(
      `line-clamp-${articleCardData?.descShowLine}`
    );
  });
  // image
  it('render ArticleCard image correctly', () => {
    imgElement = screen.getByAltText(articleCardData?.imgAlt);
    expect(imgElement).toBeInTheDocument();
  });
  // author name
  it('render ArticleCard author name correctly', () => {
    authorNameElement = screen.getByText(articleCardData?.authorName);
    expect(authorNameElement).toHaveTextContent(articleCardData?.authorName);
  });
  // author avatar
  it('render ArticleCard author avatar correctly', () => {
    imgElement = screen.getByAltText(articleCardData?.authorAvatarAlt);
    expect(imgElement).toBeInTheDocument();
  });
  // single tag value
  it('render ArticleCard tag value correctly', () => {
    tagElement = screen.getByText(articleCardData?.metaTags[0]);
    expect(tagElement).toHaveTextContent(articleCardData?.metaTags[0]);
  });
  // published date
  it('render ArticleCard published date  correctly', () => {
    dateElement = screen.getByText(articleCardData?.publishedDate);
    expect(dateElement).toHaveTextContent(articleCardData?.publishedDate);
  });
  // duration
  it('render ArticleCard duration  correctly', () => {
    durationElement = screen.getByText(articleCardData?.duration);
    expect(durationElement).toHaveTextContent(articleCardData?.duration);
  });
});

// PodcastCard
describe('PodcastCard', () => {
  let mainArticleCard: HTMLElement | null;
  let titleElement: HTMLElement | null;
  let paraElement: HTMLElement | null;
  let imgElement: HTMLElement | null;
  let dateElement: HTMLElement | null;
  let durationElement: HTMLElement | null;

  // beforeEach
  beforeEach(() => {
    render(<ArticleCard {...podcastCardData} />);
  });

  // render PodcastCard
  it('renders a PodcastCard correctly', () => {
    mainArticleCard = screen.getByTestId('ArticleCard');
    expect(mainArticleCard).toBeInTheDocument();
  });
  // title
  it('render PodcastCard title correctly', () => {
    titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
  });
  // description
  it('render PodcastCard description correctly', () => {
    paraElement = screen.getByText(podcastCardData?.description);
    expect(paraElement).toHaveTextContent(podcastCardData?.description);
  });
  // descShowLine (line-clamp-)
  it('render PodcastCard line-clamp- class correctly', () => {
    paraElement = screen.getByText(podcastCardData?.description);
    expect(paraElement).toHaveClass(
      `line-clamp-${podcastCardData?.descShowLine}`
    );
  });
  // image
  it('render PodcastCard image correctly', () => {
    imgElement = screen.getByAltText(podcastCardData?.imgAlt);
    expect(imgElement).toBeInTheDocument();
  });
  // published date
  it('render PodcastCard published date  correctly', () => {
    dateElement = screen.getByText(podcastCardData?.publishedDate);
    expect(dateElement).toHaveTextContent(podcastCardData?.publishedDate);
  });
});
