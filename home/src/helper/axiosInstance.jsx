import axios from "axios";
import { getStorage } from "./apiHelper";
export const baseURL = "http://localhost:4000/";
let axiosInstance = axios.create({
  baseURL,
});
axiosInstance.interceptors.request.use(
  function (config) {
    const token = getStorage("testtoken");
    if (token !== null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;