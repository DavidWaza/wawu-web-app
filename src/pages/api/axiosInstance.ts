import axios from "axios";

// Set the token and channel in local storage (e.g., during app initialization)
if (typeof window !== "undefined") {
  localStorage.setItem("Api-Token", "1|PTQIRN5njBYlBBz6c91y34hgjBDnQSg8Rf0");
  localStorage.setItem("channel", "user");
}

const axiosInstance = axios.create({
  baseURL: "https://wawu-backend-s7a8s.ondigitalocean.app/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const apitoken = localStorage.getItem("Api-Token");
    const channel = localStorage.getItem("channel");
    const token = localStorage.getItem("token");
    if (apitoken) {
      config.headers["Api-Token"] = apitoken;
    }
    if (channel) {
      config.headers["channel"] = channel;
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
