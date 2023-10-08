import { STATION_KEYS } from '../constants';
import { HttpFactoryService } from './http-factory.service';
import type { HttpService } from './http.service';

class StationService {
	constructor(private readonly httpService: HttpService) {}

	public async getAll(): Promise<any> {
		return this.httpService.get(STATION_KEYS.STATIONS);
	}
}

const factory = new HttpFactoryService();
export const stationService = new StationService(factory.createHttpService());
