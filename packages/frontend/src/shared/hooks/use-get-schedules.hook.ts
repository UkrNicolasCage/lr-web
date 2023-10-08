import { useEffect } from 'react'
import { toast } from 'react-toastify';

import { scheduleService } from '../services';
import { useSchedules } from '../../store';
import { useFilters } from '../../store/table-filters';
import { ERROR_TOAST_MESSAGES } from '../constants';

export const useGetSchedules = () => {
  const { limit, offset, search, sortBy, order } = useFilters();

  useEffect(() => {
    (async () => {
      try {
        const schedulesRes = await scheduleService.getAll({limit, offset, search, sortBy, order});

        useSchedules.getState().setSchedules(schedulesRes.schedules)();
        useFilters.getState().setTotalPages(schedulesRes.totalPages)();
    } catch (error) {
      toast.error(ERROR_TOAST_MESSAGES.SOMETHIG_WENT_WRONG);
    }
    })()
  }, [limit, offset, search, sortBy, order]);
}
