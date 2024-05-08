import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { LoginState } from './type';

export const useAuthStore = create(
	devtools<LoginState>((set) => ({
		isLogin: false,
		authToken: "",
		login: (token: string) =>
			set((state) => ({
				isLogin: true,
				authToken: token
			})),
		logout: () => set((state) => ({ 
			isLogin: false, 
			authToken: undefined
		})),
	}))
);