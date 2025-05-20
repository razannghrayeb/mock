import axios from 'axios';
import LocalApi from '../localApi';

export const getDepartmentById = async (id: number): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No access token found');

    const response = await LocalApi.get(`/get-by-id/departments/${id}`, {
      headers: { Authorization: token }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Department not found');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw error;
    }
    throw new Error('Failed to fetch Department');
  }
};