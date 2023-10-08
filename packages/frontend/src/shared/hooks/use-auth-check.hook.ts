import { useEffect } from 'react';
import { authService } from '../services/auth.service';
import { setUserInfo } from '../utils/set-user-info.util';

export const useAuthCheck = (): void => {
	useEffect(() => {
		(async (): Promise<void> => {
			const { auth, user } = await authService.check();

			setUserInfo(auth, user);
		})();
	}, []);
};
