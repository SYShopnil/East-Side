import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { JobCardConfigs } from './config';
import { JobCard } from '@src/components/root';

describe.each(JobCardConfigs)('Contact Block: %s', (con) => {
  const { bgType, title, subTitle } = con;

  beforeEach(() => {
    render(<JobCard bgType={bgType} title={title} subTitle={subTitle} />);
  });

  test('renders element correctly', () => {
    let textElement: HTMLElement | null;

    // title
    textElement = screen.queryByTestId('job-card-title');
    expect(textElement).toBeInTheDocument();

    // subtitle
    textElement = screen.queryByTestId('job-card-subtitle');
    expect(textElement).toBeInTheDocument();
  });

});
