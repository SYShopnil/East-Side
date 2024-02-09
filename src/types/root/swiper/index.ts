// External Imports
import { ReactNode } from 'react';

// ISwiperProps
export interface ISwiperProps {
  children: ReactNode;
  vertical?: boolean;
  autoItemCount?: boolean;
  isLoop?: boolean;
  isCenter?: boolean;
  autoPlay?: boolean;
  pauseOnHover?: boolean;
  haveOffset?: boolean;
  showBleeding?: boolean;
  activeItemIndex?: number;
  showPagination?: boolean;
  onUpdateActiveIndex?: (index: number) => void;
  spaceBetween?: string;
  showItems?: string;
  className?: string;
  noMargin?: boolean;
  speed?: number;
}
