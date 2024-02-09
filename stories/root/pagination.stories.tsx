// import Pagination from '@src/components/root/pagination';
import { Pagination } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useMemo, useState } from 'react';
import data from '../../src/data.json';

export default {
  title: 'Components/Root/pagination',
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

let PageSize = 10;

const PaginationTemplate: ComponentStory<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div style={{ background: '#E5E5E5', padding: '10px' }}>
        {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}

        <div style={{ marginTop: '100px' }}>
          <Pagination
            {...args}
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page: any) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export const PaginationPart = PaginationTemplate.bind({});
PaginationPart.args = {};
