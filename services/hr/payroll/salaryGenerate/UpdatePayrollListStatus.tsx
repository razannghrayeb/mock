import axios from 'axios';
import LocalApi from '../../localApi';

export interface UpdatePayrollStatusPayload {
  salaryName: string; // The salary name to be used in the URL
  status: string;     // E.g. "Approved", "Pending", etc.
  approved_by: number;
  currency_id: number;
}

export const updatePayrollStatus = async (
  payload: UpdatePayrollStatusPayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Extract salaryName and the fields to update
    const { salaryName, ...fieldsToUpdate } = payload;

    // Send PATCH request to `/payroll-lists/by-salary-name/status/:salaryName`
    const response = await LocalApi.patch(
      `/payroll-lists/by-salary-name/status/${salaryName}`,
      fieldsToUpdate,
      {
        headers: {
          Authorization: token,
          Language: 'en', // Optional header
        },
      }
    );

    // Return the response data
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || 'Failed to update payroll status'
      );
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update payroll status');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update payroll status');
    }
  }
};
