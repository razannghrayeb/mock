import axios from 'axios';
import LocalApi from '../../localApi';

interface CreateSalaryAdvancePayload {
  employee_id: number;
  title?: string;
  type_id: number;
  advance_amount: number;
  status?: 'Pending' | 'Approved' | 'Rejected';
  request_date?: string;
  approved_date?: string;
  salary_month?: number;  // Optional field if you need to keep it
  for_month?: number;     // Represents the month number (1 for January … 12 for December)
  for_year?: number;      // Represents the year (e.g., 2025, 2026)
  flag_filter?: 'deduction' | 'advance'; // New single enum field (default: "deduction")
}

export const createSalaryAdvance = async ({
  employee_id,
  title,
  type_id,
  advance_amount,
  status,
  request_date,
  approved_date,
  salary_month,
  for_month,
  for_year,
  flag_filter,
}: CreateSalaryAdvancePayload): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Construct the payload using the new fields (removing 'end_date')
    const payload = {
      employee_id,
      title,
      type_id,
      advance_amount,
      status,
      request_date,
      approved_date,
      salary_month,
      for_month,
      for_year,
      flag_filter,
    };

    // Make the POST request using LocalApi
    const response = await LocalApi.post('/create/salary-advances', payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || 'Failed to create salary advance'
      );
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to create salary advance');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to create salary advance');
    }
  }
};
