import axios from 'axios';
import LocalApi from '../../localApi';

export interface UpdatePayrollPaymentStatusPayload {
  id: number; // The unique payroll ID to update
  employee_id?: number;
  manager_id?: number;
  payment_status?: string;
}

export const updatePayrollPaymentStatus = async (
  payload: UpdatePayrollPaymentStatusPayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Destructure the id from payload and keep the remaining fields
    const { id, ...fieldsToUpdate } = payload;

    // Send PATCH request to update the payroll payment status
    const response = await LocalApi.patch(`/update/payment-status/payroll/${id}`, fieldsToUpdate, {
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
        error.response?.data?.message || 'Failed to update payroll payment status'
      );
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update payroll payment status');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update payroll payment status');
    }
  }
};
