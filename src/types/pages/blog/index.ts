export interface IHeroBlog {
  bgType: string;
  bgImage: any;
  title: string;
  description: string;
  author: {
    data: {
      attributes: {
        name: string;
        authorSlug: string;
        bio: string;
        designation: string;
        profileImage: any;
        alt: string;
      };
    };
  };
}

type Tag = {
  attributes: {
    tag: string;
  };
};

export interface IBlogContent {
  bgType: string;
  contentBlock: string;
  metaTags: Tag[];
  publishedDate: string;
}
