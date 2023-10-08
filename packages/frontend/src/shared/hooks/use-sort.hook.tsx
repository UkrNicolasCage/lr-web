import { useFilters } from '../../store';
import { ISchedule } from '../types';

export const useSort = (field: keyof ISchedule) => {
  const sortAsc = () => {
    useFilters.getState().setSortBy(field)()
    useFilters.getState().setOrder('asc')()
  }

  const sortDesc = () => {
    useFilters.getState().setSortBy(field)()
    useFilters.getState().setOrder('desc')()
  }

  return { sortAsc, sortDesc }
}