import { create } from "zustand";
import { UserState } from "@/features/user/model/types";

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  setUser: (user) => set({ currentUser: user }),
}));
