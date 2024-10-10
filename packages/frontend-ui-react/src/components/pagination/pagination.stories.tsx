import type { Meta } from '@storybook/react';
import { useState } from 'react';
import {
  Pagination,
  PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'components/Pagination',
  component: Pagination,
};

export default meta;

export const Usage = () => {
  const [page, setPage] = useState(0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <div>
      <Pagination totalItems={100} pageSize={5} page={page} onPageChange={handlePageChange} />
    </div>
  );
};

export const Parts = () => (
  <PaginationContainer>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </PaginationContainer>
);
