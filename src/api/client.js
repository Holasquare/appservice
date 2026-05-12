import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetchUsers = async () => {
  const res = await client.get("/users");
  return res.data;
};

export default client;
