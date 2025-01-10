import axios from "axios";

// Create Axios instance with the base URL of your backend
const API = axios.create({
  baseURL: "https://squad-2-backend.onrender.com", // Update to match your backend URL
  //withCredentials: true, // Allow sending cookies with requests
});

// Interceptor to add Authorization header (if needed for other endpoints)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Interceptor for handling responses and errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // Handle unauthorized errors globally
    }
    return Promise.reject(error);
  }
);

export default API;
