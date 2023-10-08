import { create } from 'zustand';
import { ISchedule } from '../shared/types';

interface IFiltersState {
    limit: number;
    offset: number;
    search: string;
    sortBy: keyof ISchedule;
    order: 'asc' | 'desc';
    totalPages: number;
    currentPage: number;

    setLimit: (value: number) => () => void;
    setOffset: (value: number) => () => void;
    setSearch: (value: string) => () => void;
    setTotalPages: (value: number) => () => void;
    setCurrentPage: (value: number) => () => void;
    setSortBy: (value: keyof ISchedule) => () => void;
    setOrder: (value: 'asc' | 'desc') => () => void;

}

export const useFilters = create<IFiltersState>((set) => {
	return {
		limit: 10,
    offset: 0,
    search: '',
    totalPages: 1,
    currentPage: 1,
    sortBy: 'dispatch',
    order: 'desc',

    setLimit: (value: number) => {
      return (): void => {
        set(() => {
          return {
            limit: value
          };
        });
      }
    },

    setOffset: (value: number) => {
      return (): void => {
        set(() => {
          return {
            offset: value
          };
        });
      }
    },

    setSearch: (value: string) => {
      return (): void => {
        set(() => {
          return {
            search: value
          };
        });
      }
    },

    setTotalPages: (value: number) => {
      return (): void => {
        set(() => {
          return {
            totalPages: value
          };
        });
      }
    },

    setCurrentPage: (value: number) => {
      return (): void => {
        set(() => {
          return {
            currentPage: value
          };
        });
      }
    },

    setSortBy: (value: keyof ISchedule) => {
      return (): void => {
        set(() => {
          return {
            sortBy: value
          };
        });
      }
    },

    setOrder: (value: 'asc' | 'desc') => {
      return (): void => {
        set(() => {
          return {
            order: value
          };
        });
      }
    }

	};
});
