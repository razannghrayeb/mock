import axios from 'axios';
import LocalApi from '../../localApi';

export interface UpdateSalaryAdvancePayload {
  id: number;
  employee_id?: number;
  title?: string;
  type_id?: number;
  advance_amount?: number;
  status: "Pending" | "Approved" | "Rejected";
  request_date?: string;
  approved_date?: string;
  for_month: number;
  for_year: number;
  flag_filter: string;
}

export const updateSalaryAdvance = async (
  payload: UpdateSalaryAdvancePayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Destructure the id from payload and keep the remaining fields
    const { id, ...fieldsToUpdate } = payload;

    // Send PUT request to update the salary advance
    const response = await LocalApi.put(`/update/salary-advances/${id}`, fieldsToUpdate, {
      headers: {
        Authorization: token,
        Language: 'en', // Optional header
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || 'Failed to update salary advance'
      );
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update salary advance');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update salary advance');
    }
  }
};
