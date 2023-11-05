import { ISchedule } from '../../shared/types';

export const TABLE_HEADER = Object.freeze([
  {
    label: '№',
    value: 'index',
  },
  {
    label: 'Ім\'я',
    value: 'name',
  },
  {
    label: 'Привілегія',
    value: 'privilege',
  },
  {
    label: 'Дата народження',
    value: 'DateOfBirthd'
  },
  {
    label: 'Стать',
    value: 'Sex',
  },

]) as Array<{
  label: string;
  value: keyof ISchedule;
  withoutSort?: boolean;
}>