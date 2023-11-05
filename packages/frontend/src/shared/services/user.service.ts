import { USER_KEYS } from '../constants';
import { ICreateUser, IUser } from '../types';
import type { IAuthData } from '../types/auth.types';
import { EnhancedWithAuthHttpService } from './http-auth.service';
import { HttpFactoryService } from './http-factory.service';

class UserService {
	constructor(private readonly httpService: EnhancedWithAuthHttpService) {}

  public async getAll(groupId: string): Promise<IAuthData> {
		return this.httpService.get(USER_KEYS.USERS, { params: { groupId } });
	}

	public async create(payload: ICreateUser): Promise<IAuthData> {
		return this.httpService.post(USER_KEYS.USERS, payload);
	}

  public async update(payload: IUser): Promise<IAuthData> {
    return this.httpService.patch(USER_KEYS.USERS, payload, {
      params: { id: payload.id },
    });
  }

  public async delete(id: string): Promise<void> {
    return this.httpService.delete(USER_KEYS.USERS, { params: { id } });
  }
}

const factory = new HttpFactoryService();
export const userService = new UserService(factory.createAuthHttpService());
