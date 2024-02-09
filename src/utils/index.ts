/**
 * Export all types defined in this folder from here
 */

import { fontColorSelector } from './fontColorSelector';
import { backgroundClassSelector } from './backgroundClassSelector';
import { highlightedTextStyleSelector } from './highlightedTextStyleSelector';
import { textGradientGenerator } from './textGradientGenerator';
import { isValidMail, lengthCheck, dataValidation } from './inputValidator';
import { isObjectEmpty } from './objectEmptyCheck';
import { formatDate, formatTime } from './formatTime';
import { sectionPaddingClassSelector } from './sectionPaddingClassSelector';
import {
  getData,
  getStrapiURL,
  redirectTo500page,
  getStrapiMediaUrl,
} from './strapi';

export {
  fontColorSelector,
  backgroundClassSelector,
  highlightedTextStyleSelector,
  textGradientGenerator,
  isValidMail,
  lengthCheck,
  isObjectEmpty,
  dataValidation,
  formatDate,
  sectionPaddingClassSelector,
  getData,
  getStrapiURL,
  redirectTo500page,
  getStrapiMediaUrl,
  formatTime,
};
