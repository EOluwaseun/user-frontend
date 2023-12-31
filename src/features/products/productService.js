import axios from 'axios';
import { base_url } from '../../ustils/base_url';
import { config } from '../../ustils/axiosconfig';

const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};

const addToWishList = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishList,
};
