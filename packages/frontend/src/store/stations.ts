import { create } from 'zustand';
import type { IStation } from '../shared/types';

interface IStationsState {
    stations: Array<IStation> | null;
    setStations: (value: Array<IStation> | null) => () => void;
}

export const useStations = create<IStationsState>((set) => {
	return {
		stations: null,
		setStations: (value: Array<IStation> | null) => {
			return (): void => {
				set(() => {
					return {
						stations: value
					};
				});
			};
		}
	};
});
