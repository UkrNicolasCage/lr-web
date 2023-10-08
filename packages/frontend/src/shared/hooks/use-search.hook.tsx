import React from 'react';

import { debounce } from '../utils';
import { useFilters } from '../../store/table-filters';

export const useSearch = () => {
  const searchHandlerBase = (event: React.ChangeEvent<HTMLInputElement>) => {
    useFilters.getState().setSearch(event.target.value)()

    useFilters.getState().setCurrentPage(1)()
  }

  const searchHandler = debounce(searchHandlerBase, 500);

  return {
    searchHandler,
  };
}