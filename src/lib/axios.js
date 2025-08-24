import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://companies-backend-omega.vercel.app/api/companies",
  withCredentials: true,
});

