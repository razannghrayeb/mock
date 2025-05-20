import axios from 'axios';
import LocalApi from '../../localApi';

export const getAttendanceReport = async (
  date: string,
  page: number = 1,
  searchQuery?: string,
  singleRow: boolean = false,
) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    const response = await LocalApi.get('/attendance-report', {
        headers: {
            Authorization: token,
           
          },
      params: {
        date,
        page,
        searchQuery,
        singleRow,
      },
      
    });
    console.log('response', response);

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      console.error('Axios error details:', error.response);
      throw new Error(error.response?.data?.message || 'Get attendance report failed');
    } else {
      console.error('Non-Axios error:', error.message || 'Get attendance report failed');
      throw new Error('Get attendance report failed');
    }
  }
};
