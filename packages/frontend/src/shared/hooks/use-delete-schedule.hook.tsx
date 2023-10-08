import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { scheduleService } from '../services';
import { RouterKeys } from '../../router/keys';
import { ERROR_TOAST_MESSAGES, SUCCESS_TOAST_MESSAGES } from '../constants';

export const useDeleteSchedule = (id?: string) => {
  const [disabled, setDisabled] = React.useState(false);
  const navigate = useNavigate();

  const deleteHandler = async () => {
    setDisabled(true);

    if (!id) {
        return
        }

    try {
      await scheduleService.delete(id);

      toast.success(SUCCESS_TOAST_MESSAGES.SCHEDULE_DELETED);
      navigate(`/${RouterKeys.SCHEDULES}`);
    } catch (error) {
      toast.error(ERROR_TOAST_MESSAGES.SOMETHIG_WENT_WRONG)
    } finally {
      setDisabled(false);
    }
  }

  return {
    disabled,
    deleteHandler,
  }
}