import axios from 'axios';
import LocalApi from '../localApi';

interface CreateHolidayPayload {
  title: string;
  from_date: string;
  to_date: string;
  total_days?: number;
  days_of_week?: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  type?: 'weekly' | 'monthly' | 'yearly';
  created_by?: number;
  updated_by?: number;
}

export const createHoliday = async (payload: CreateHolidayPayload): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No access token found');

    const response = await LocalApi.post('/create/holidays', payload, {
      headers: { Authorization: token }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create holiday');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw error;
    }
    throw new Error('Failed to create holiday');
  }
};