import axios from 'axios';
import LocalApi from '../localApi';

// Update the interface to allow a File (or string) for profile_picture.
export interface UpdateEmployeePayload {
  id: number; // The ID of the employee to update
  user_id?:number;
  currency_id?:number;
  position_id?:number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  department_id?: number;
  role_id?: number;
  salary?: number;
  hire_date?: Date;    // e.g. '2025-02-28'
  leave_date?: Date;   // e.g. '2026-03-10'
  status?: 'Active' | 'Inactive' | 'Terminated';
  profile_picture?: File | string; // Now accepts a File
  work_attendance_type?:"onsite"| "hybrid"| "remote";
}

export const updateEmployee = async (
  payload: UpdateEmployeePayload
): Promise<any> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No access token found in local storage');
    }

    const { id, ...fieldsToUpdate } = payload;
    const formData = new FormData();
    for (const key in fieldsToUpdate) {
      if (fieldsToUpdate.hasOwnProperty(key)) {
        let value = (fieldsToUpdate as any)[key];
        if (value !== undefined && value !== null) {
          if (value instanceof Date) {
            value = value.toISOString().slice(0, 10);
          }
          formData.append(key, value);
        }
      }
    }

    const response = await LocalApi.put(`/employees/${id}`, formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to update employee');
    } else if (error instanceof Error) {
      console.error('Non-Axios error:', error.message);
      throw new Error(error.message || 'Failed to update employee');
    } else {
      console.error('Unknown error:', error);
      throw new Error('Failed to update employee');
    }
  }
};
