import axios from 'axios';
import LocalApi from '../localApi';

export const deleteProfilePictureForEmployee = async (  id: number ) => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authorization token is missing in localStorage');
    }

    // Send a DELETE request to /delete/employees/:id
    const response = await LocalApi.delete(`/delete/employees/profile-picture/${id}`, {
      headers: {
        Authorization: token,
        Language: 'en', // Optional header
      },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to delete employee');
    } else {
      throw new Error('Failed to delete employee');
    }
  }
};
