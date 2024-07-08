import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

// Define the Auth type
interface Auth {
  access: string;
  refresh: string;
}

// Create an Axios instance
const axiosService = axios.create({
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
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

// Add a response interceptor
axiosService.interceptors.response.use(
  (res: AxiosResponse) => Promise.resolve(res),
  (err) => Promise.reject(err)
);

// Refresh auth logic
const refreshAuthLogic = async (failedRequest: any) => {
  const authString = localStorage.getItem("auth");
  if (authString) {
    const { refresh } = JSON.parse(authString) as Auth;
    return axios
      .post(
        "/refresh/token/",
        null,
        {
          baseURL: "http://localhost:8000",
          headers: {
            Authorization: `Bearer ${refresh}`,
          },
        }
      )
      .then((resp) => {
        const { access, refresh } = resp.data as Auth;
        failedRequest.response.config.headers["Authorization"] =
          "Bearer " + access;
        localStorage.setItem(
          "auth",
          JSON.stringify({
            access,
            refresh,
          })
        );
      })
      .catch(() => {
        localStorage.removeItem("auth");
      });
  }
  return Promise.reject(failedRequest);
};

// Create an auth refresh interceptor
createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

// Fetcher function
export function fetcher(url: string) {
  return axiosService.get(url).then((res) => res.data);
}

export default axiosService;
