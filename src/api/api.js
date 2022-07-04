import axios from 'axios';
import { toast } from 'react-toastify';

const SHOPS_ENDPOINT = '/api/shops';
const PRODUCTS_ENDPOINT = '/api/products';
const ORDER_ENDPOINT = '/api/orders';

export const getAllShops = async () => {
  try {
    const res = await axios.get(SHOPS_ENDPOINT);
    return res.data.data;
  } catch (error) {
    toast.error('Sorry, something went wrong, please try again later ');
  }
};

export const getProductsById = async id => {
  try {
    const res = await axios.get(`${PRODUCTS_ENDPOINT}/${id}`);
    return res.data.data;
  } catch (error) {
    toast.error('Sorry, something went wrong, please try again later ');
  }
};
