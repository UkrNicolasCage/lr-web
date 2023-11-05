import { GROUP_KEYS, USER_KEYS } from '../constants';
import { ICreateGroup, ICreateUser, IGroup, IUpdateGroup, IUser } from '../types';
import type { IAuthData } from '../types/auth.types';
import { EnhancedWithAuthHttpService } from './http-auth.service';
import { HttpFactoryService } from './http-factory.service';

class GroupService {
	constructor(private readonly httpService: EnhancedWithAuthHttpService) {}

  public async getAll(): Promise<IAuthData> {
		return this.httpService.get(GROUP_KEYS.GROUPS);
	}

	public async create(payload: ICreateGroup): Promise<IAuthData> {
		return this.httpService.post(GROUP_KEYS.GROUPS, payload);
	}

  public async update(payload: IUpdateGroup, id: string): Promise<IAuthData> {
    return this.httpService.patch(GROUP_KEYS.GROUPS, payload, {
      params: { id },
    });
  }

  public async delete(id: string): Promise<void> {
    return this.httpService.delete(GROUP_KEYS.GROUPS, { params: { id } });
  }
}

const factory = new HttpFactoryService();
export const groupService = new GroupService(factory.createAuthHttpService());
