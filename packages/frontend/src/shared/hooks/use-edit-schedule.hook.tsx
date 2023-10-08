import { useState } from 'react'
import { toast } from 'react-toastify'

import { IScheduleFormValues } from '../types'
import { useSchedule, useStations } from '../../store'
import { createStationOptions, transdormScheduleFields, validateFormValues} from '../utils'
import { scheduleService } from '../services'
import { useGetSchedule } from './use-get-schedule.hook'
import { useGetStations } from './use-get-stations.hook'
import { scheduleSchema } from '../validation'
import { ERROR_TOAST_MESSAGES, SUCCESS_TOAST_MESSAGES } from '../constants'

export const useEditSchedule = (id?: string) => {
  const [disabled, setDisabled] = useState(false)

  const { schedule } = useSchedule()
  const { stations } = useStations()

  const stationOptions = stations ? createStationOptions(stations) : []

  const validate = validateFormValues(scheduleSchema)

  const submitHandler = (data: IScheduleFormValues) => {
    setDisabled(true)

    if (!id) {
      return
      }

    try {
      const payload = transdormScheduleFields({ ...data})
      scheduleService.update(id, payload)

      toast.success(SUCCESS_TOAST_MESSAGES.SCHEDULE_UPDATED)
    } catch (error) {
      toast.error(ERROR_TOAST_MESSAGES.SOMETHIG_WENT_WRONG)
    } finally {
      setDisabled(false)
    }
  }

  const initValues = {
        name: schedule?.name,
        startStationId: {value: schedule?.startStationId,
          label: stationOptions.filter(({value}) => {
                  return value === schedule?.startStationId
                  })[0]?.label },
        endStationId: {value: schedule?.endStationId,
          label: stationOptions.filter(({value}) => {
                  return value === schedule?.endStationId
                  })[0]?.label },
        dispatch: schedule?.dispatch,
        arrival: schedule?.arrival,
      }

  useGetStations()
  useGetSchedule(id)

  return {
    disabled,
    submitHandler,
    stationOptions,
    initValues,
    validate
  }
}