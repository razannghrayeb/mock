import baseApi from './baseApi';
import axios from 'axios';

export const deleteUser = async (option: { id: number }) => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authorization token is missing in localStorage');
    }

    // Make DELETE request with the dynamically retrieved token
    const apiInstance = await baseApi;
    const response = await apiInstance.delete('/delete-user', {
      params: {
        id: option.id,
      },
      // data: {
      //   id: option.id,
      // },
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Delete Store failed');
    } else {
      throw new Error('Delete Store failed');
    }
  }
};
