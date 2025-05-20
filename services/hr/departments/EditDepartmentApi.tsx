import axios from 'axios';
import baseApi from '../baseApi';
import LocalApi from '../localApi';

export interface UpdateDepartmentPayload {
  id: number;                // The unique ID of the department to update
  name?: string;             // Department name
  description?: string;      // Department description
  parent_department_id?: number; // ID of parent department, if any
  manager_id?: number;       // ID of the manager, if applicable
}

export const updateDepartment = async (
  payload: UpdateDepartmentPayload
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

    // Send PUT request to `/api/update/departments/:id`
    // Adjust to match your actual base path, if needed
    const response = await LocalApi.put(`/update/departments/${id}`, fieldsToUpdate, {
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
      throw new Error(error.response?.data?.message || 'Failed to update department');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update department');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update department');
    }
  }
};
