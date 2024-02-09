import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { videoFrameConfigs } from './config';
import { VideoFrame } from '@src/components/root';

describe.each(videoFrameConfigs)('Search Filter: %s', (con) => {
  beforeEach(() => {
    render(<VideoFrame {...con} />);
  });

  test('modal is interacting successfully', () => {
    let videoEl: HTMLElement | null;

    // opening modal
    fireEvent.click(screen.queryByTestId('video-frame-thumbnail')!);
    videoEl = screen.queryByTestId('video-frame-modal');
    expect(videoEl).toBeInTheDocument();

    // closing modal
    fireEvent.click(screen.queryByTestId('video-frame-backdrop')!);
    videoEl = screen.queryByTestId('video-frame-modal');
    expect(videoEl).not.toBeInTheDocument();
  });
});
