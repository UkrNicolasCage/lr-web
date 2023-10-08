import { SCHEDULE_KEYS } from '../constants';
import { IGetAllSchedulesParams, IGetAllSchedulesRes, ISchedule, IUpdateSchedulePayload } from '../types';
import { HttpFactoryService } from './http-factory.service';
import type { HttpService } from './http.service';

class ScheduleService {
	constructor(private readonly httpService: HttpService) {}

	public async create(payload: ISchedule): Promise<ISchedule> {
		return this.httpService.post(SCHEDULE_KEYS.SCHEDULES, payload);
	}

	public async getAll(payload: IGetAllSchedulesParams): Promise<IGetAllSchedulesRes> {
		return this.httpService.get(SCHEDULE_KEYS.SCHEDULES, {
			params: payload,
		});
	}

	public async getOne(id: string): Promise<ISchedule> {
		return this.httpService.get(`${SCHEDULE_KEYS.SCHEDULES}/${id}`);
	}

	public async update(id: string, payload: IUpdateSchedulePayload): Promise<ISchedule> {
		return this.httpService.patch(`${SCHEDULE_KEYS.SCHEDULES}/${id}`, payload);
	}

	public async delete(id: string): Promise<void> {
		return this.httpService.delete(`${SCHEDULE_KEYS.SCHEDULES}/${id}`);
	}
}

const factory = new HttpFactoryService();
export const scheduleService = new ScheduleService(factory.createHttpService());
