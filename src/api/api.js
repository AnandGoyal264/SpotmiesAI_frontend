import axios from "axios";

const api = axios.create({
  baseURL: "https://spotmiesal-backend-1.onrender.com/api"
});

export default api;
