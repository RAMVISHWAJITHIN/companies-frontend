import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://companies-backend-na8l.onrender.com/api/companies/",
  withCredentials: true,
});

