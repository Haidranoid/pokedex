import {useEffect, useState} from "react";

interface UsePaginationReturnType<T> {
  pageNumber: number,
  pageCount: number,
  pageData: Array<T>,

  previousPage(): void,

  nextPage(): void,
}

type UsePaginationParamsType = <T>(items: Array<T>, pageLimit: number) => UsePaginationReturnType<T>

const usePagination: UsePaginationParamsType = (items, pageLimit) => {
  const pageCount = Math.ceil(items.length / pageLimit);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageData, setPageData] = useState<typeof items>([])

  useEffect(() => {
    const start = pageNumber * pageLimit;
    const end = start + pageLimit;
    const currentItems = items.slice(start, end);

    setPageData(currentItems)
  }, [pageNumber, items, pageLimit])

  const previousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 0));
  };

  const nextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, pageCount - 1));
  };

  return {
    pageNumber,
    pageCount,
    pageData,
    previousPage,
    nextPage,
  };
}

export default usePagination;
