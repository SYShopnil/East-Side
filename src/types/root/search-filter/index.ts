interface Tag {
  id: number;
  attributes: {
    tag: string;
  };
}

export interface ISearchFilter {
  tags: Tag[];
  //   tags: Exclude<Tag>[];
  filterHandler: (query: string) => void;
  searchHandler?: (query: string) => void;
  isSearch?: boolean;
}
