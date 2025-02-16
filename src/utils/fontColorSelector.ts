/**
 * @method fontColorSelector
 * @param {string} bgType
 * @returns {string}
 * @description this function will receive bgType and return font color
 */

import { Colors } from '@src/themes';

export const fontColorSelector = (bgType: string) => {
  switch (bgType) {
    case 'white':
    case 'default':
      return Colors.brand.body || '#212121';
    case 'image':
    case 'black':
    case 'gradient_blue':
    case 'gradient_green':
      return Colors.brand.white || '#FFFFFF';
    default:
      return Colors.brand.body || '#212121';
  }
};
