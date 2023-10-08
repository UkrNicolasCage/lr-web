import { useState } from 'react'
import { toast } from 'react-toastify'

import { useSchedules, useStations } from '../../store'
import { createStationOptions, transdormScheduleFields, validateFormValues } from '../utils'
import { IScheduleFormValues } from '../types'
import { scheduleService } from '../services'
import { useGetStations } from './use-get-stations.hook'
import { scheduleSchema } from '../validation'
import { ERROR_TOAST_MESSAGES } from '../constants'

export const useAddSchedule = (closeHandler: ()=> void) => {
  const [disabled, setDisabled] = useState(false)

  const { stations } = useStations()
  const { schedules } = useSchedules()

  const stationOptions = stations ? createStationOptions(stations) : []

  const validate = validateFormValues(scheduleSchema)

  const submitHandler = async (data: IScheduleFormValues) => {
    setDisabled(true)
    try {
      const transformedData = transdormScheduleFields(data)
      const newSchedule = await scheduleService.create(transformedData)

      useSchedules.getState().setSchedules([newSchedule, ...schedules!])()

      closeHandler()
    } catch (e) {
      toast.error(ERROR_TOAST_MESSAGES.SOMETHIG_WENT_WRONG)
    } finally {
      setDisabled(false)
    }
  }

  useGetStations()

  return {
    disabled,
    submitHandler,
    stations,
    stationOptions,
    validate,
  }
}