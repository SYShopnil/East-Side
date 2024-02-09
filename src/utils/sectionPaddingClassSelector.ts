/**
 * @method sectionPaddingClassSelector
 * @param {string} sectionPadding
 * @returns {string}
 * @description this function will receive sectionPadding and return section padding class
 */

import { Colors } from '@src/themes';

export const sectionPaddingClassSelector = (
  sectionPadding: string | null | undefined
) => {
  switch (sectionPadding) {
    case 'py_120px':
      return 'section-padding-primary';
    case 'py_160px':
      return 'section-padding-secondary';
    case 'py_200px':
      return 'section-padding-tertiary';
    case 'top':
      return 'section-padding-off-top';
    case 'bottom':
      return 'section-padding-off-bottom';
    default:
      return '';
  }
};
