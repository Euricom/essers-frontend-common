import { useMemo } from 'react';

// Original Source Code
// https://github.com/mayankshubham/react-pagination

const range = (start: number, end: number) => {
  const length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

type PaginationOptions = {
  numberOfPages: number;
  siblingCount?: number;
  currentPage: number;
};

export const DOTS = -1;

export const calculatePages = (
  numberOfPages: number,
  siblingCount: number,
  currentPage: number,
) => {
  const firstPageNumber = 1;
  const secondPageNumber = firstPageNumber + 1;
  const currentPageNumber = currentPage + 1; // currentPage is 0-based, while page numbers are 1-based
  const lastPageNumber = numberOfPages;
  const secondLastPageNumber = lastPageNumber - 1;

  let startRange = currentPageNumber - siblingCount;
  let endRange = currentPageNumber + siblingCount;
  if (startRange < secondPageNumber + 1) {
    const diff = secondPageNumber + 1 - startRange;
    endRange = Math.min(endRange + diff, secondLastPageNumber);
    startRange = secondPageNumber;
  }

  if (endRange > secondLastPageNumber - 1) {
    const diff = secondLastPageNumber - 1 - endRange;
    startRange = Math.max(startRange + diff, secondPageNumber);
    endRange = secondLastPageNumber;
  }

  const pageNumbers = [];

  pageNumbers.push(firstPageNumber);

  if (startRange == secondPageNumber + 1) {
    pageNumbers.push(secondPageNumber);
  }

  if (startRange > secondPageNumber + 1) {
    pageNumbers.push(DOTS);
  }

  pageNumbers.push(...range(startRange, endRange));

  if (endRange == secondLastPageNumber - 1) {
    pageNumbers.push(secondLastPageNumber);
  }

  if (endRange < secondLastPageNumber - 1) {
    pageNumbers.push(DOTS);
  }

  if (lastPageNumber > firstPageNumber) pageNumbers.push(lastPageNumber);

  return pageNumbers;
};

export const usePaginator = ({ numberOfPages, siblingCount = 1, currentPage }: PaginationOptions) =>
  useMemo(
    () => calculatePages(numberOfPages, siblingCount, currentPage),
    [numberOfPages, siblingCount, currentPage],
  );
