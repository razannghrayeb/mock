import axios from 'axios';
import LocalApi from '../localApi';

// Update the interface to allow a File (or string) for profile_picture.
export interface CreateEmployeePayload {
  user_id?:number;
  currency_id?:number;
  position_id?:number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: number;
  department_id?: number;
  role_id?: number;
  salary?: number;
  hire_date: Date;         // e.g. '2025-02-28'
  leave_date?: Date;       // e.g. '2026-03-10'
  status?: 'Active' | 'Inactive' | 'Terminated';
  profile_picture?: File | string; // Updated to accept a File
  work_attendance_type?:"onsite"| "hybrid"| "remote";
}

export const createEmployee = async (
  payload: CreateEmployeePayload
): Promise<any> => {
  try {
    // Retrieve token from localStorage (if your API requires it)
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }

    // Create FormData and append each field (convert dates to strings)
    const formData = new FormData();
    for (const key in payload) {
      if (payload.hasOwnProperty(key)) {
        let value = (payload as any)[key];
        if (value !== undefined && value !== null) {
          if (value instanceof Date) {
            // Format date as YYYY-MM-DD
            value = value.toISOString().slice(0, 10);
          }
          formData.append(key, value);
        }
      }
    }

    // POST request with multipart/form-data header
    const response = await LocalApi.post('/employees', formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data'
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create employee');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to create employee');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to create employee');
    }
  }
};
