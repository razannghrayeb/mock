import LocalApi from '../localApi';
import axios from 'axios';

export const getUserById = async (userId: string | number) => {
  try {
    
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("No token found in local storage");
    }
    const response = await LocalApi.get(`/get-user-by-id/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    // Expected response: { message: "User retrieved successfully", data: { ... } }
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Get user failed');
    } else {
      throw new Error('Get user failed');
    }
  }
};
