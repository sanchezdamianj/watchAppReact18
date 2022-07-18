import axios from "axios";
// import queryString from './query-string';
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTQ3YWRjZGZmNjZjNTgwZmI5NDQ0MGQxMjIyNWY2NSIsInN1YiI6IjYyYzBhYTlhNjNkNzEzMDI2YzJmMDY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z2BhWQgxk4ZZryLHtOc4J_irKGI6_aMdYJV7d81-qI4",
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
