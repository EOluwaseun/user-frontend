import axios from 'axios';
import { base_url } from '../../ustils/base_url';
import { config } from '../../ustils/axiosconfig';

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  // if (response.data) {
  //   localStorage.setItem('customer', JSON.stringify(response.data));
  // }
  return response.data;
};

//login
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  // console.log(response.data);
  //user data
  if (response.data) {
    localStorage.setItem('customer', JSON.stringify(response.data));
  }
  return response.data;
};

const getUserwishList = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const authService = {
  register,
  login,
  getUserwishList,
};

export default authService;
