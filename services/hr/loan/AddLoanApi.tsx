// services/hr/loan/AddLoanApi.ts
import axios from 'axios';
import LocalApi from '../localApi';

export interface CreateLoanPayload {
  loan_type_id: number;
  created_by: number;
  employee_id: number;
  manager_id?: number;
  loan_amount: number;
  installment_period: number;
  monthly_repayment: number;
  approved_date?: string; // "YYYY-MM-DD"
  repayment_start_date?: string; // "YYYY-MM-DD"
  // Allowed statuses: "requested", "approved", "rejected"
  status?: "Requested" | "Approved" | "Rejected" | "Active" | "Freezed" | "Done";
  loan_details?: string;
  remaining?: number;
  // Future enhancements:
  employee_signature?: string;
  rejection_reason?: string;
}

export const createLoan = async (payload: CreateLoanPayload): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No access token found in local storage');

    const response = await LocalApi.post('/create/loan', payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create loan');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to create loan');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to create loan');
    }
  }
};
