import { useMemo } from 'react';
import { useViewport } from '@src/hooks/index';
import { breakpoints } from '@src/themes/breakpoints';
export const useOffset = (): number | string | null => {
  const { width, container } = useViewport();
  const containerOffset = useMemo(
    () => (width - breakpoints[container]) / 2,
    [container, width]
  );
  const offset: number | string =
    containerOffset > 0 ? containerOffset : `2rem`;
  return offset;
};
