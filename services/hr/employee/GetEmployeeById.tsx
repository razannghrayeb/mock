import axios from 'axios';
import localApi from '../localApi';

export const getEmployeeById = async (id: number) => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authorization token is missing in localStorage');
    }

    // Make GET request with the `id` in query parameters
    const response = await localApi.get(`/employees/${id}`, {
      
      headers: {
        Authorization: token, // Ensure Bearer prefix is included
        Language: 'en', // Optional, can be adjusted as needed
      },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch product details.');
    } else {
      throw new Error('An unexpected error occurred while fetching product details.');
    }
  }
};
