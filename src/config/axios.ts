import authService from "@/modules/auth/services/auth.services";
import { message } from "antd";
import axiosApi, { AxiosError } from "axios";
import Cookies from 'js-cookie'


const axios = axiosApi.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((reqConfig) => {
  const token = Cookies.get("accessToken");
  
  if (token && !reqConfig.headers.Authorization) {
    reqConfig.headers.Authorization = `Bearer ${token}`;
  }
  return reqConfig;
});

axios.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  async (error:AxiosError<{error:string|null,data:null}>) => {
    try {
      if(error.response?.status === 401 &&
        error.config?.url == "/auth/refresh"){
          Cookies.remove('accessToken')
          Cookies.remove('refreshToken')
          window.location.href = `${window.location.origin}/login`
          return
        }

      if (
        error.response?.status === 401 &&
        error.config?.url !== "/auth/login"
      ) {
        const refreshToken = Cookies.get('refreshToken');
        if(!refreshToken){
          Cookies.remove('accessToken')
          Cookies.remove('refreshToken')
          window.location.href = `${window.location.origin}/login`
          return
        }
        const tokens = await authService.refreshToken(refreshToken);
        Cookies.set("accessToken", tokens.accessToken, {secure: true, sameSite:'Strict'})
        Cookies.set("refreshToken", tokens.refreshToken, {secure: true, sameSite:'Strict'})
         error.config!.headers.Authorization = `Bearer ${tokens.accessToken}`;
        console.log("retrying request");
        const data = await axios(error.config!);
        return data;
      }
      const errorMessage = error.response?.data.error || 'Error occured'
      message.error(errorMessage)


      // globalErrorHandler(error);
      throw errorMessage;
    } catch(e) {
      throw e;
    }
  }
);

export default axios;
