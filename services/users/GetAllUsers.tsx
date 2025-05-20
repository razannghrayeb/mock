import axios from 'axios';
import { AxiosError } from 'axios';
import baseApi from './baseApi';

export interface GetUsersParams {
  page?: number;
  searchQuery?: string;
  role?: string;
  showDisabled?: boolean; // Default should be false
}

export const getUsers = async (params: GetUsersParams): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No access token found in localStorage');
    }

    // Ensure showDisabled is correctly formatted as a string ('true' or 'false')
    const queryParams = {
      ...params,
      showDisabled: params.showDisabled ? 'true' : 'false',
    };

    // Log request for debugging
    console.log('Fetching users with params:', queryParams);

    const apiInstance = await baseApi;
    const response = await apiInstance.get('/get-users', {
      headers: {
        Authorization: token,
        Language: 'en', // Default language
      },
      params: queryParams, // Pass query parameters dynamically
    });

    return response.data; // Return list of users
  } catch (error: any) {
    // Handle errors during the request
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to fetch users');
    } else {
      console.error('Non-Axios error:', error);
      throw new Error('Failed to fetch users');
    }
  }
};
