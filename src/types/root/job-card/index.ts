export interface IJobCard {
  attributes: IAttributes;
  bgType: string;
}

type IAttributes = {
  slug: string;
  title: string;
  subTitle: string;
  linkedInLink: string;
};
