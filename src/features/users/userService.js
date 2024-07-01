import axios from 'axios';
import { base_url } from '../../ustils/base_url';
import { config } from '../../ustils/axiosconfig';

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);

  return response.data;
};

//login
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);

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

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};
const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response.data) {
    return response.data;
  }
};
const removeProductFromCart = async (cartItemId) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const updateProductFromCart = async (cartDtails) => {
  const response = await axios.delete(
    `${base_url}user/updateproduct-cart/${cartDtails.cartItemId}/${cartDtails.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetails) => {
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetails,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorder`, config);
  if (response.data) {
    return response.data;
  }
};

const updateAProfile = async (data) => {
  const response = await axios.put(`${base_url}user/edit-user`, data, config);
  // if (response.data) {
  //   localStorage.setItem('customer', JSON.stringify(response.data));
  // }
  // return response.data;

  if (response.data) {
    return response.data;
  }
};

const forgotAPasswordToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

const resetPassword = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data?.token}`,
    { password: data?.password }
  );
  if (response.data) {
    return response.data;
  }
};

const authService = {
  register,
  login,
  getUserwishList,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrder,
  getUserOrders,
  updateAProfile,
  forgotAPasswordToken,
  resetPassword,
};

export default authService;
