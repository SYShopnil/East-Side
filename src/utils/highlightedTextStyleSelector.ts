/**
 * @method highlightedTextStyleSelector
 * @param {string} bgType
 * @returns {string}
 * @description this function will receive bgType and return highlighted text background image style
 */

import { Colors } from '@src/themes';

export const highlightedTextStyleSelector = (bgType: string) => {
  switch (bgType) {
    case 'default':
    case 'white':
    case 'gradient_green':
      return (
        Colors.gradients.secondaryGradient ||
        `linear-gradient(305.63deg, #4229EF 10.49%, #2BB8E4 129.23%)`
      );
    case 'black':
    case 'image':
    case 'gradient_blue':
      return (
        Colors.gradients.primaryGradient ||
        `linear-gradient(54.17deg, #2BB8E4 21.35%, #00D855 72.02%)`
      );
    default:
      return (
        Colors.gradients.secondaryGradient ||
        `linear-gradient(305.63deg, #4229EF 10.49%, #2BB8E4 129.23%)`
      );
  }
};
