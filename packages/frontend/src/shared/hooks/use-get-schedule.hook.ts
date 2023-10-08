import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { scheduleService } from '../services';
import { useSchedule } from '../../store';
import { RouterKeys } from '../../router/keys';
import { ERROR_TOAST_MESSAGES } from '../constants';

export const useGetSchedule = (id?: string) => {
  const navigate = useNavigate();

   useEffect(() => {
    (async () => {
      try {
        const schedulesRes = id ? await scheduleService.getOne(id) : null

        useSchedule.getState().setSchedule(schedulesRes)();
    } catch (error) {
        toast.error(ERROR_TOAST_MESSAGES.SCHEDULE_DOES_NOT_EXIST);
        navigate(`/${RouterKeys.SCHEDULES}`);
    }
    })()
  }, [id]);
}
