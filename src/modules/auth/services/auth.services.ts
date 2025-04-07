import Cookies from "js-cookie"
import axios from "../../../config/axios"
import { LoginPayload } from "../types/auth.types"

async function login(data:LoginPayload){
    const res  = await axios.post("/auth/login", data)
    Cookies.set("accessToken", res.data.accessToken, {secure: true, sameSite:'Strict'})
    Cookies.set("refreshToken", res.data.refreshToken, {secure: true, sameSite:'Strict'})
    return res.data
}

export const authService = {
    login
}