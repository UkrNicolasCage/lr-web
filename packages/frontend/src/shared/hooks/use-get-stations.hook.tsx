import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useStations } from '../../store';
import { stationService } from '../services';
import { ERROR_TOAST_MESSAGES } from '../constants';

export const useGetStations = () => {
  useEffect(() => {
    (async () => {
      try {
        const stations = await stationService.getAll();
        useStations.getState().setStations(stations)();
    } catch (error) {
      toast.error(ERROR_TOAST_MESSAGES.SOMETHIG_WENT_WRONG)
    }
    })()
  }, []);
}