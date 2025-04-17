import { create } from "zustand";
import { LoginPayload, SignupPayload } from "../types/auth.types";
import { authService } from "../services/auth.services";

type AuthStore = {
    loading: boolean;
    login: (data: LoginPayload) => Promise<void>;
    logout: () => Promise<void>;
    signup: (data:SignupPayload) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
    loading:false,
    login: async (data:LoginPayload) => {
        set({loading:true})
        await authService.login(data);
        set({loading:false})
    },
    signup: async (data:SignupPayload) => {
        set({loading:true})
        await authService.signup(data)
        set({loading:false})
    },
    logout: async () => {
        set({loading:true})
        await authService.logout()
        set({loading:false})
    }
}));