// src/helpers/AuthManager.tsx
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

interface Auth {
  access: string;
  refresh: string;
}

const axiosService = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: { "Content-Type": "application/json" },
});

axiosService.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const authString = localStorage.getItem("auth");
  if (authString) {
    const { access } = JSON.parse(authString) as Auth;
    if (config.headers) {
      config.headers.Authorization = `Bearer ${access}`;
    }
  }
  return config as InternalAxiosRequestConfig;
});

const refreshAuthLogic = async (failedRequest: any) => {
  const authString = localStorage.getItem("auth");
  if (authString) {
    const { refresh } = JSON.parse(authString) as Auth;
    const res = await axios.post("http://localhost:8000/api/auth/refresh/", { refresh });
    localStorage.setItem("auth", JSON.stringify({
      access: res.data.access,
      refresh: res.data.refresh,
    }));
    failedRequest.response.config.headers["Authorization"] = `Bearer ${res.data.access}`;
    return Promise.resolve();
  }
  return Promise.reject();
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

axiosService.interceptors.response.use(
  (res: AxiosResponse) => Promise.resolve(res),
  (err) => Promise.reject(err)
);

export default axiosService;
