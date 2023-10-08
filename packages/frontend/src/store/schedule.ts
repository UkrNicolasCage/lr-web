import { create } from 'zustand';
import type { ISchedule, } from '../shared/types';

interface IScheduleState {
    schedule: ISchedule | null;
    setSchedule: (value: ISchedule | null) => () => void;
}

export const useSchedule = create<IScheduleState>((set) => {
	return {
		schedule: null,
		setSchedule: (value: ISchedule | null) => {
			return (): void => {
				set(() => {
					return {
						schedule: value
					};
				});
			};
		}
	};
});
