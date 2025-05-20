import axios from 'axios';
import LocalApi from '../localApi';

interface CreateRolePayload {
  name: string;
  description?: string;
}

export const createHrRole = async (payload: CreateRolePayload): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No access token found');

    const response = await LocalApi.post(`/roles`, payload, {
      headers: { Authorization: token }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create role');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw error;
    }
    throw new Error('Failed to create role');
  }
}; 