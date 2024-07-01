import axios from 'axios';
import { base_url } from '../../ustils/base_url';
import { config } from '../../ustils/axiosconfig';

const getProducts = async (data) => {
  // console.log(data);
  // sort and filter is perform here
  // initially the url is ${base_url}product
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ''}${
      data?.tags ? `tags=${data?.tags}&&` : ''
    }${data?.category ? `category=${data?.category}` : ''}`
  );
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};

// create order will be here PENDING

export const getUserOrder = async (id) => {
  const response = await axios.get(`${base_url}/user/getmyorder`, config);
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

const addRating = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  getSingleProduct,
  addToWishList,
  addRating,
};
