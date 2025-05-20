import axios from 'axios';
import LocalApi from '../localApi';

export interface UpdateTransportPayload {
  id: number;                     
  hr_attendance_id?: number; 
  transport_amount?: number;
  transport_day?: string;
  status?: string;
  title?: string;
}

export const updateTransport = async (
  payload: UpdateTransportPayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No access token found in local storage');
    }

    
    const { id, ...fieldsToUpdate } = payload;
    const response = await LocalApi.put(`/update/transport/${id}`, fieldsToUpdate, {
      headers: {
        Authorization: token,
        Language: 'en', // Optional header
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to update transport');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update transport');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update transport');
    }
  }
};
