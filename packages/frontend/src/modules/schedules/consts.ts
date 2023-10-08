import { ISchedule } from '../../shared/types';

export const TABLE_HEADER = Object.freeze([
  {
    label: '',
    value: '',
    withoutSort: true,
  },
  {
    label: 'Name',
    value: 'name',
  },
  {
    label: 'Start',
    value: 'start',
    withoutSort: true,
  },
  {
    label: 'End',
    value: 'end',
    withoutSort: true,
  },
  {
    label: 'Date of dispatch',
    value: 'dispatch',
  },
  {
    label: 'Estimated date of arrival',
    value: 'arrival',
  }

]) as Array<{
  label: string;
  value: keyof ISchedule;
  withoutSort?: boolean;
}>