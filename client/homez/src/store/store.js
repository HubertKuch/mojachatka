import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      setUser: (user) =>
        set((state) => {
          return { user, isLoggedIn: true };
        }),
      logout: () =>
        set((state) => {
          return { user: null, isLoggedIn: false, token: null };
        }),
      token: null,
      setToken: (token) => set(() => ({ token })),
      refreshToken: null,
      setRefreshToken: (token) => set(() => ({ refreshToken: token })),
      registerData: {},
      setRegisterData: (data) => set(() => ({ registerData: data })),
    }),
    {
      name: "app-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useStore;
