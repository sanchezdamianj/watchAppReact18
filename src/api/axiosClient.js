import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Authorization:
        "Bearer Enter your access token here",
        "Content-Type": "application/json",
  },
  paramsSerializer: (params) => ({
    ...params,
    api_key: apiConfig.apiKey,
  }),
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
