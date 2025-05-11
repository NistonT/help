import { create } from "zustand";

interface IAuthStore {
	isAuth: boolean;
	isAdmin: boolean;
	setIsAuthTrue: () => void;
	setIsAuthFalse: () => void;
	setIsAuth: () => void;

	setIsAdminTrue: () => void;
	setIsAdminFalse: () => void;
	setIsAdmin: () => void;
}

export const useAuthStore = create<IAuthStore>(set => ({
	isAuth: false,
	isAdmin: false,

	setIsAuth: () => set(state => ({ isAuth: !state.isAuth })),
	setIsAuthTrue: () => set(() => ({ isAuth: true })),
	setIsAuthFalse: () => set(() => ({ isAuth: false })),

	setIsAdmin: () => set(state => ({ isAdmin: !state.isAdmin })),
	setIsAdminTrue: () => set(() => ({ isAdmin: true })),
	setIsAdminFalse: () => set(() => ({ isAdmin: false })),
}));
