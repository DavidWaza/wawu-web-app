import axios from "axios";

// Retrieve the API token from environment variables or set a default
const apiToken = process.env.NEXT_PUBLIC_API_TOKEN || "";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL




// Check if running in the browser (not in a Node.js environment)
if (typeof window !== "undefined") {
  // Store the API token and channel information in localStorage
  localStorage.setItem("Api-Token", apiToken);
  localStorage.setItem("channel", "user");
  // localStorage.setItem("Bearer-token")
}

// Create an Axios instance with a base URL and default headers
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

// Add a request interceptor to include the API token and Bearer token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve tokens and other required information from localStorage

    const apitoken = localStorage.getItem("Api-Token");
    const channel = localStorage.getItem("channel");
    const token = localStorage.getItem("token");  // Assuming Bearer token is stored here


    // Add API token to request headers if it exists
    if (apitoken) {
      config.headers["Api-Token"] = apitoken;
    }

    // Add channel information to request headers if it exists
    if (channel) {
      config.headers["channel"] = channel;
    }

    // Add Bearer token to request headers if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
