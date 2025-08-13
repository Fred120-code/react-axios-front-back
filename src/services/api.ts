import axios from "axios";

const API_URL = "http://localhost:6000/api";

export const register = async (userData: any) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData: any) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const enterOtp = async (email: string, otp: string) => {
  const response = await axios.post(`${API_URL}/verify-otp`, { email, otp });
  return response.data;
}