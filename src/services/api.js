import axios from 'axios';
import { BASE_URL } from '../helpers/constants';

export const http = axios.create({
  baseURL: BASE_URL,
});
