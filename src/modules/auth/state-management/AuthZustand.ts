import { create } from 'zustand';

interface AuthStore {
  userId: string | null;
  userToken: string | null;

  updateUserId(userId: string): void;
  updateUserToken(userToken: string): void;
}

export const useAuthStore = create<AuthStore>(set => ({
  userId: null,
  userToken: null,

  updateUserId: (userId: string) => set({ userId }),
  updateUserToken: (userToken: string) => set({ userToken })
}));
