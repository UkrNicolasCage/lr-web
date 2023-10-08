import { IScheduleFormValues, ISchedule } from '../types';

export const transdormScheduleFields = (schedule: IScheduleFormValues): ISchedule => {
  return {
    id: schedule.id,
    name: schedule.name,
    startStationId: schedule.startStationId.value,
    endStationId: schedule.endStationId.value,
    dispatch: new Date(schedule.dispatch),
    arrival: new Date(schedule.arrival),
  }
}