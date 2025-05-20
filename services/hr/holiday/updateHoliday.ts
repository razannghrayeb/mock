import axios from 'axios';
import LocalApi from '../localApi';

export interface UpdateHolidayPayload {
  id: number;
  title?: string;
  from_date?: string;
  to_date?: string;
  total_days?: number;
  days_of_week?: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  type?: 'weekly' | 'monthly' | 'yearly';
  created_by?: number;
  updated_by?: number;
}

export const updateHoliday = async (payload: UpdateHolidayPayload): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No access token found');

    const { id, ...updateData } = payload;
    const response = await LocalApi.put(`/update/holidays/${id}`, updateData, {
      headers: {
        Authorization: token,
        Language: 'en'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to update holiday');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw error;
    }
    throw new Error('Failed to update holiday');
  }
};