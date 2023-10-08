import { AUTH_KEYS } from '../constants';
import { IUser } from '../types';
import type { IAuthCreds, IAuthData} from '../types/auth.types';
import { HttpFactoryService } from './http-factory.service';
import type { HttpService } from './http.service';

class AuthService {
	constructor(private readonly httpService: HttpService) {}

	public async check(): Promise<IAuthData> {
		return this.httpService.get(AUTH_KEYS.CHECK);
	}

	public async signUp(payload: IAuthCreds): Promise<IUser> {
		return this.httpService.post(AUTH_KEYS.SIGN_UP, payload);
	}

	public async signIn(payload: IAuthCreds): Promise<IUser> {
		return this.httpService.post(AUTH_KEYS.SIGN_IN, payload);
	}

	public async logout(): Promise<void> {
		return this.httpService.post(AUTH_KEYS.LOGOUT, {});
	}
}

const factory = new HttpFactoryService();
export const authService = new AuthService(factory.createHttpService());
