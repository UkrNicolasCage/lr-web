import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { useAuth } from '../../store/auth';

export const mainAxios = axios.create({
	withCredentials: true
});

mainAxios.interceptors.response.use(
	(response): AxiosResponse<unknown, unknown> => {
		return response;
	},
	async (error) => {
		if (Boolean(error.response) && error.response.status === 401) {
			useAuth.getState().updateAuth(false)();
		}
		return Promise.reject(error);
	}
);
