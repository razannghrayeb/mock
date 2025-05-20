// src/services/hr/attendance/Attendance/getAttendanceDetails.ts

import axios from 'axios';
import LocalApi from '../../localApi';

export const getAttendanceDetails = async (
  date: string,
  employee_id: string,
  singleRow: boolean = false
) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    // Make the API call with required headers and parameters
    const response = await LocalApi.get('/attendance-report-for-employee', {
      headers: {
        Authorization: token,
        Language: 'en',         // Optional Language header (default: 'en')
        'X-Client-Type': 'web', // Client type can be 'web' or 'mobile'
      },
      params: {
        date,
        employee_id,
        singleRow, // Will become &singleRow=false in the URL
      },
    });

    console.log('response attendance details', response);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      console.error('Axios error details:', error.response);
      throw new Error(error.response?.data?.message || 'Get attendance details failed');
    } else {
      console.error('Non-Axios error:', error.message || 'Get attendance details failed');
      throw new Error('Get attendance details failed');
    }
  }
};
