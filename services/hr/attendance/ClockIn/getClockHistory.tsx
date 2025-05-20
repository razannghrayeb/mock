import axios from 'axios';
import LocalApi from '../../localApi';

export const getClockHistory = async (employee_id: number, date: string) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    // Parse the provided date string
    const d = new Date(date);
    
    // Get the correct month (add 1 as JavaScript months are 0-indexed)
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    console.log(`Fetching clock history for: Employee ${employee_id}, Month: ${month}, Year: ${year}`);

    const response = await LocalApi.get('/attendance/get-clock-history-by-employee', {
      headers: {
        Authorization: token,
      },
      params: {
        employee_id,
        month,
        year,
      },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      console.error('Axios error details:', error.response);
      throw new Error(error.response?.data?.message || 'Get clock history failed');
    } else {
      console.error('Non-Axios error:', error.message || 'Get clock history failed');
      throw new Error('Get clock history failed');
    }
  }
};