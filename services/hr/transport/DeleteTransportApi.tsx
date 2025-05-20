import axios from 'axios';
import LocalApi from '../localApi';

export const deleteTransport = async (id: number): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No access token found in local storage');
    }

    
    const response = await LocalApi.delete(`/delete/transport/${id}`, {
      headers: {
        Authorization: token,
        Language: 'en', // Optional header
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle Axios errors
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to delete transport');
    }
    // Handle non-Axios errors
    else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to delete transport');
    }
    // Catch-all for unexpected errors
    else {
      console.error('Unknown error:', error);
      throw new Error('Failed to delete transport');
    }
  }
};
