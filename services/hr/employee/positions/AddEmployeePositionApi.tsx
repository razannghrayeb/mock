import axios from 'axios';
import LocalApi from '../../localApi';

interface CreatePositionPayload {
  name: string;
  description?: string;
}

export const createPosition = async ({
  name,
  description,

}: CreatePositionPayload): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Construct the request payload
    const payload = {
      name,
      description,
   
    };

    // Make the POST request using baseApi (Axios instance)
    const response = await LocalApi.post('/create/hr_employee_positions', payload, {
      headers: {
        Authorization: token, // Use the token from localStorage
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle axios-specific errors first
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create position');
    } else if (error instanceof Error) {
      // Handle non-Axios errors
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to create position');
    } else {
      // Catch-all for any other type of error
      console.error('Unknown error:', error);
      throw new Error('Failed to create position');
    }
  }
};
