import axios from 'axios';
import baseApi from './baseApi';

export interface UpdateUserPayload {
  id: number; // Store ID is required for updates
  name: string;
  userName: string;
  email: string;
  definer: string;
  phone: string;
  role: string | number;
  attachmentIds: number[] | string[] | null;
  gender: 'Male' | "Female";
  active: 0 | 1;
}

export const updateUser = async (
  data: UpdateUserPayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authorization token is missing in localStorage');
    }

    // Log the payload for debugging
    console.log('Payload to be sent for update:', data);

    const apiInstance = await baseApi;
    const response = await apiInstance.post('/update-user', data, {
      headers: {
        Authorization: token,
        Language: 'en', // Optional header for language (default: 'en')
      },
    });

    return response.data; // Return the response data (e.g., message or updated store details)
  } catch (error: any) {
    // Handle errors if any occur during the request
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to update store';
      console.error('Axios error:', errorMessage);
      throw new Error(errorMessage);
    } else {
      console.error('Non-Axios error:', error.message || 'An unknown error occurred');
      throw new Error('Failed to update store');
    }
  }
};
