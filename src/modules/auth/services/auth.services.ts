import Cookies from "js-cookie"
import axios from "../../../config/axios"
import { LoginPayload, SignupPayload, User } from "../types/auth.types"

async function login(data:LoginPayload):Promise<{accessToken:string, refreshToken:string,user:User}>{
    const res  = await axios.post("/auth/login", data)
    Cookies.set("accessToken", res.data.accessToken, {secure: true, sameSite:'Strict'})
    Cookies.set("refreshToken", res.data.refreshToken, {secure: true, sameSite:'Strict'})
    return res.data
}

async function logout(){
    const res = await axios.delete("/auth/logout")
    Cookies.remove("accessToken")
    Cookies.remove("refreshToken")
    return res.data
}

async function signup(data:SignupPayload){
    const res = await axios.post('/auth/signup', data)
    return res.data
}

async function refreshToken(refreshToken:string):Promise<{accessToken:string, refreshToken:string}> {
    const res= await axios.post('auth/refresh',{},{headers:{
        Authorization: `Bearer ${refreshToken}`
    }} )
    return res.data
}

export const authService = {
    login,
    logout,
    signup,
    refreshToken
}
export default authService