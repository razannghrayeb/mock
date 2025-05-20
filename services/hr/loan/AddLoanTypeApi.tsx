// services/hr/loan/AddLoanApi.ts
import axios from 'axios';
import LocalApi from '../localApi';

export interface CreateLoanTypePayload {
  title?: string;
  description?: string;
  
}

export const createLoanType = async (payload: CreateLoanTypePayload): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No access token found in local storage');

    const response = await LocalApi.post('/create/loan-type', payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create Loan Type');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to create Loan Type');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to create Loan Type');
    }
  }
};
