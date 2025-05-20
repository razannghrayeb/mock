import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_RENDER_HR_URL;

const LocalApi = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Client-Type': 'web'
  }
});

export default LocalApi;
