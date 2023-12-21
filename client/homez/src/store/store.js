import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      setUser: (user) =>
        set((state) => {
          state.isLoggedIn = true;

          return { user };
        }),
    }),
    {
      name: "app-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useStore;
