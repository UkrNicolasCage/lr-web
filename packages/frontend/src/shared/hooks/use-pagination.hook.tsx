import { useState, useEffect } from 'react';

import { useFilters } from '../../store';

export const usePagination = () => {
  const {totalPages, currentPage} = useFilters()

  const [backDisabled, setBackDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const nextHandler = () => {
    if (currentPage === totalPages) {
      return;
    }

    useFilters.getState().setCurrentPage(currentPage + 1)();
  };

  const backHandler = () => {
    if (currentPage === 1) {
      return;
    }

    useFilters.getState().setCurrentPage(currentPage - 1)();
  };

  const choosePageHandler = (page: number) => {
    useFilters.getState().setCurrentPage(page)();
  };

  useEffect(() => {
    useFilters.getState().setOffset((currentPage - 1) * 10)();
    if (currentPage === 1) {
      setBackDisabled(true);
    } else {
      setBackDisabled(false);
    }

    if (currentPage === totalPages) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [currentPage, totalPages]);

  return {
    backDisabled,
    nextDisabled,
    nextHandler,
    backHandler,
    choosePageHandler,
    totalPages,
    currentPage,
  };
}