import axios from 'axios';
import LocalApi from '../localApi';

interface UpdateRolePayload {
  id: number;
  name?: string;
  description?: string;
}

export const updateHrRole = async (payload: UpdateRolePayload): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No access token found');

    const { id, ...updateData } = payload;

    const response = await LocalApi.put(`/roles/${id}`, updateData, {
      headers: { Authorization: token }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to update role');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw error;
    }
    throw new Error('Failed to update role');
  }
}; 