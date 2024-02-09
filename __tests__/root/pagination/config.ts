import data from '../../../src/data.json';

const paginationConfigs = [
  {
    data: data,
    pagination: {
      currentPage: 1,
      totalCount: data.length,
      pageSize: 10,
    },
  },
];

export { paginationConfigs };
