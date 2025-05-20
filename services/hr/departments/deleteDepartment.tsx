import axios from 'axios';
import baseApi from '../baseApi';
import LocalApi from '../localApi';
export const deleteDepartment = async (id: number): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Send a DELETE request to your "delete-department" endpoint
    // e.g., http://localhost:5000/api/delete/departments/:id
    const response = await LocalApi.delete(`/delete/departments/${id}`, {
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
      throw new Error(error.response?.data?.message || 'Failed to delete department');
    }
    // Handle non-Axios errors
    else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to delete department');
    }
    // Catch-all for unexpected errors
    else {
      console.error('Unknown error:', error);
      throw new Error('Failed to delete department');
    }
  }
};
