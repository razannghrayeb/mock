import LocalApi from '../localApi';
import axios from 'axios';

export const getAllUsers = async () => {
  try {
    
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("No token found in local storage");
    }
    const response = await LocalApi.get(`/get-all-users`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Get All users failed');
    } else {
      throw new Error('Get All users failed');
    }
  }
};
