import { ISectionPadding } from '../section-padding';

interface FAQ {
  question?: string;
  answer?: string;
}

export interface IFaq {
  subTitle?: string;
  title?: string;
  faqs: FAQ[];
  sectionPadding: ISectionPadding;
}
