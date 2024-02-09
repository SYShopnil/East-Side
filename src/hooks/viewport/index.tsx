// External Imports
import { useState, useEffect } from 'react';
import { getWindow } from 'ssr-window';

// Internal Imports
import { breakpoints } from '@src/themes/breakpoints';

// Dimension
interface Dimension {
  container: 'sm' | 'md' | 'lg' | 'xl';
  width: number;
  height: number;
}

// getContainer
const getContainer = (width: number): 'sm' | 'md' | 'lg' | 'xl' => {
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'sm';
};

// getWindowDimensions
const getWindowDimensions = (): Dimension | any => {
  const { innerWidth: width, innerHeight: height } = getWindow();
  return { width, height };
};

// useViewport
export const useViewport = (): Dimension => {
  const { width, height } = getWindowDimensions();
  const [container, setContainer] = useState(getContainer(width));
  const [windowDimensions, setWindowDimensions] = useState({ width, height });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize(): void {
      const { width: updatedWidth, height: updatedHeight } =
        getWindowDimensions();
      setWindowDimensions({ width: updatedWidth, height: updatedHeight });
      setContainer(getContainer(updatedWidth));
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return { container, ...windowDimensions };
};
