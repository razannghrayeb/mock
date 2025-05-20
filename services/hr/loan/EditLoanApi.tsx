import axios from 'axios';
import LocalApi from '../localApi';

export interface UpdateLoanPayload {
  id: number; // The unique ID of the loan to update
  loan_type_id?: number;
  created_by?: number;
  employee_id?: number;
  manager_id?: number;
  loan_amount?: number;
  installment_period?: number;
  monthly_repayment?: number;
  approved_date?: string; // format "YYYY-MM-DD"
  repayment_start_date?: string; // format "YYYY-MM-DD"
  // Allowed statuses:
  status?: "Requested" | "Approved" | "Rejected" | "Active" | "Freezed" | "Done";
  loan_details?: string;
  remaining?: number;
  // New optional fields:
  rejection_reason?: string;
  employee_signature?: string;
}

export const updateLoan = async (payload: UpdateLoanPayload): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }
    const { id, ...fieldsToUpdate } = payload;
    const response = await LocalApi.put(`/update/loan/${id}`, fieldsToUpdate, {
      headers: {
        Authorization: token,
        Language: 'en', // Optional header
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to update loan');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update loan');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update loan');
    }
  }
};
