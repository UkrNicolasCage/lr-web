import { off } from 'process';
import { ISelectOption } from './common.types';

export interface ISchedule {
  id: string;
  name: string;
  startStationId: string;
  endStationId: string;
  dispatch: Date;
  arrival: Date;
}

export interface IUpdateSchedulePayload {
  name: string;
  startStationId: string;
  endStationId: string;
  dispatch: Date;
  arrival: Date;
}

export interface IScheduleFormValues {
  id: string;
  name: string;
  startStationId: ISelectOption;
  endStationId: ISelectOption;
  dispatch: string;
  arrival: string;
}

export interface IEditScheduleFormValues {
  name?: string;
  startStationId?: ISelectOption;
  endStationId?: ISelectOption;
  dispatch?: string;
  arrival?: string;
}

export interface IGetAllSchedulesParams {
  search: string;
  offset: number;
  limit: number;
  sortBy: keyof ISchedule;
  order: 'asc' | 'desc';

}

export interface IGetAllSchedulesRes {
  schedules: Array<ISchedule>;
  totalPages: number;
  currentPage: number;
}