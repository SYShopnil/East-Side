/**
 * @method backgroundClassSelector
 * @param {string} bgType
 * @returns {string}
 * @description this function will receive bgType and return background class
 */

import { Colors } from '@src/themes';

export const backgroundClassSelector = (bgType: string | undefined | null) => {
  switch (bgType) {
    case 'default':
      return Colors.brand.transparent || 'transparent';
    case 'white':
      return Colors.brand.white || '#FFFFFF';
    case 'black':
      return Colors.brand.black || '#000000';
    case 'gradient_blue':
      return (
        Colors.gradients.secondaryGradient ||
        'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)'
      );
    case 'gradient_green':
      return (
        Colors.gradients.primaryGradient ||
        'linear-gradient(54.17deg, #2BB8E4 21.35%, #00D855 72.02%)'
      );
    case 'image':
      return '';
  }
};
