import axios from 'axios';
import { base_url } from '../../ustils/base_url';

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    return response.data;
  }
};

//login
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  // console.log(response.data);
  //user data
  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
};

const authService = {
  register,
  login,
};

export default authService;
