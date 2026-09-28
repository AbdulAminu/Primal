import axios from "axios";

export const api = axios.create({
  baseURL: "https://my-app-eta-steel-94.vercel.app/api/users/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // confirm this matches what your Login saves it as
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});