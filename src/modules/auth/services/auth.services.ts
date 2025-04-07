// 'use server'
// import { cookies } from "next/headers"
import axios from "../../../../config/axios"
import { LoginPayload } from "../types/auth.types"

async function login(data:LoginPayload){
    const res  = await axios.post("/auth/login", data)
    // cookies().set("accessToken", res.data.accessToken, {secure: true, httpOnly: true})
    // cookies().set("refreshToken", res.data.refreshToken, {secure: true, httpOnly: true})
    return res.data
}

export const authService = {
    login
}