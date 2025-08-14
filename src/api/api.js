// src/api/api.js
import axios from "axios";

const API_BASE_URL = "https://snow-mosquito-696198.hostingersite.com/api"; // change if hosted later

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
