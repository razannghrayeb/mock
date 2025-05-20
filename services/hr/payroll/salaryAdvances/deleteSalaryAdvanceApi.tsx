import axios from 'axios';
import baseApi from '../../baseApi';
import LocalApi from '../../localApi';

export const deleteSalaryAdvance = async (id: number): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Send a DELETE request to remove the salary advance
    const response = await LocalApi.delete(`/delete/salary-advances/${id}`, {
      headers: {
        Authorization: token,
        Language: 'en', // Optional header
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || 'Failed to delete salary advance'
      );
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to delete salary advance');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to delete salary advance');
    }
  }
};
