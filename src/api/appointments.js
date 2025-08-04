// src/api/appointments.js
import api from "./api";

export const bookAppointment = async (formData) => {
  return await api.post("/appointments", formData);
};
