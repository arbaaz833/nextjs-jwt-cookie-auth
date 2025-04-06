import { create } from "zustand";
import { LoginPayload } from "../types/auth.types";
import { authService } from "../services/auth.services";

type AuthStore = {
    loading: boolean;
    login: (data: LoginPayload) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
    loading:false,
    login: async (data:LoginPayload) => {
        set({loading:true})
        await authService.login(data);
        set({loading:false})
    }
}));