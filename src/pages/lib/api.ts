import axios from 'axios';

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL
      : process.env.NEXT_PUBLIC_BACKEND_URL_PROD,
  withCredentials: false,
});

api.defaults.withCredentials = false;
