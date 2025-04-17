import { create } from "zustand";
import { LoginPayload, SignupPayload, User } from "../types/auth.types";
import { authService } from "../services/auth.services";
import { asyncTrackerMiddleware } from "@/utils/zustand-async-middleware";

type AuthStore = {
  login: (data: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
  loginLoading?: boolean;
  user:User | null;
  logoutLoading?: boolean;
  signupLoading?: boolean;
  signup: (data: SignupPayload) => Promise<void>;
};

export const useAuthStore = create<AuthStore>()(
  asyncTrackerMiddleware((set) => ({
    user: null,
    login: async (data: LoginPayload) => {
      const res =  await authService.login(data);
      set({ user: res.user});
    },
    signup: async (data: SignupPayload) => {
      await authService.signup(data);
    },
    logout: async () => {
      await authService.logout();
    },
  }))
);
