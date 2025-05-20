import axios from 'axios';
import LocalApi from '../../localApi';

export interface UpdateEmployeePositionsPayload {
  id: number;
  name?: string;             
  description?: string;      
}

export const updateEmployeePosition = async (
  payload: UpdateEmployeePositionsPayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Destructure the ID from the payload to place in the URL,
    // and gather the fields to be updated separately
    const { id, ...fieldsToUpdate } = payload;

    const response = await LocalApi.put(`/update/hr_employee_positions/${id}`, fieldsToUpdate, {
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
      throw new Error(error.response?.data?.message || 'Failed to update employee position');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update employee position');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update employee position');
    }
  }
};
