import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:8080/api",
  timeout: 1000,
  headers: { Authorization: "Bearer GOOGLE_API_KEY" },
});

export const fetchUserProfile = async () => {
  return await api.get("/user");
};
