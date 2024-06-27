import axios from "axios";
const apiToken = process.env.NEXT_PUBLIC_API_TOKEN || "";
if (typeof window !== "undefined") {
  localStorage.setItem("Api-Token", apiToken);
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
