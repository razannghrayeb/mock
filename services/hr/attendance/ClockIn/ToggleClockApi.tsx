import LocalApi from '../../localApi';
import axios from 'axios';

export const toggleClock = async (payload: any) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error("No access token found in local storage");
    }

    const response = await LocalApi.post('/attendance/toggleClock', payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Toggle clock failed');
    } else {
      throw new Error('Toggle clock failed');
    }
  }
};
