import axios from 'axios';
import LocalApi from '../localApi';

interface CreateNotePayload {
  hr_attendance_id?: number;
  description?: string;
}

export const createNote = async ({
 hr_attendance_id,
 description,

}: CreateNotePayload): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Construct the request payload
    const payload = {
      hr_attendance_id,
      description,
    };

    // Make the POST request using baseApi (Axios instance)
    const response = await LocalApi.post('/create/attendance-notes', payload, {
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
      throw new Error(error.response?.data?.message || 'Failed to create note');
    } else if (error instanceof Error) {
      // Handle non-Axios errors
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to create note');
    } else {
      // Catch-all for any other type of error
      console.error('Unknown error:', error);
      throw new Error('Failed to create note');
    }
  }
};
