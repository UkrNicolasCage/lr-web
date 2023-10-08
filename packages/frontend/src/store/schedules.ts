import { create } from 'zustand';
import type { ISchedule, } from '../shared/types';

interface ISchedulesState {
    schedules: Array<ISchedule> | null;
    setSchedules: (value: Array<ISchedule> | null) => () => void;
}

export const useSchedules = create<ISchedulesState>((set) => {
	return {
		schedules: null,
		setSchedules: (value: Array<ISchedule> | null) => {
			return (): void => {
				set(() => {
					return {
						schedules: value
					};
				});
			};
		}
	};
});
