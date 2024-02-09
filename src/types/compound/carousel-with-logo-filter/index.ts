import { ISectionPadding } from '@src/types/root';
import { ISliderOptions } from '../carousel-block';

interface Logo {
  logo: any;
  logoAlt: string;
}
interface Image {
  image: any;
  alt: string;
}

export interface ICarouselWithLogoFilter {
  logos?: Logo[];
  images: Image[];
  carouselOptions?: ISliderOptions;
  sectionPadding?: ISectionPadding;
}
