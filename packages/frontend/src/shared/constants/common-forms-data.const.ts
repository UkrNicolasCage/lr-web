import { ISchedule } from '../../shared/types';

export const SCHEDULE_FORM_DATA = Object.freeze([
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Enter name',
    isSelect: false,
    mask: '',
  },
  {
    name: 'startStationId',
    label: 'Start Station',
    placeholder: 'Select start station',
    isSelect: true,
    mask: '',
  },
  {
    name: 'endStationId',
    label: 'EndStation',
    placeholder: 'Select end station',
    isSelect: true,
    mask: '',
  },
  {
    name: 'dispatch',
    label: 'Dispatch',
    mask: '9999-99-99 99:99',
    isSelect: false,
  },
  {
    name: 'arrival',
    label: 'Arrival',
    mask: '9999-99-99 99:99',
    isSelect: false,
  },
]) as Array<{
  name: keyof ISchedule;
  label: string;
  placeholder?: string;
  isSelect: boolean;
  mask?: string;
}>;