// src/services/hr/dashboard/dashboard.ts
import axios from 'axios';
import LocalApi from '../localApi';

interface AxiosErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

/**
 * Helper: get auth token from localStorage
 */
function getAuthHeaders() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No access token found');
  return { Authorization: token };
}

export interface DateFilter {
  startDate?: string; // YYYY-MM-DD
  endDate?: string;
}

export interface PayrollSummaryParams extends DateFilter {
  year?: number;
  month?: number;
}

/**
 * Fetch 6 latest leave requests, optional date range filter
 */
export const getLatestLeaveRequests = async (
  filters?: DateFilter
): Promise<any> => {
  try {
    const headers = getAuthHeaders();
    const response = await LocalApi.get(`/dashboard/get-six-leave-requests`, {
      params: filters,
      headers
    });
    return response.data;
  } catch (error) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
      throw new Error(
        axiosError.response?.data?.message || 'Failed to fetch leave requests'
      );
    }
    console.error('General error:', error);
    throw error;
  }
};

/**
 * Fetch attendance summary: total, present, leave, absent
 * Optional: date range filter
 */
export const getAttendanceSummary = async (
  filters?: DateFilter
): Promise<any> => {
  try {
    const headers = getAuthHeaders();
    const response = await LocalApi.get(`/dashboard/attendace-summary-for-cards`, {
      params: filters,
      headers
    });
    return response.data;
  } catch (error) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
      throw new Error(
        axiosError.response?.data?.message || 'Failed to fetch attendance summary'
      );
    }
    console.error('General error:', error);
    throw error;
  }
};

/**
 * Fetch department attendance summary
 * Optional: date range filter
 */
export const getDepartmentAttendanceSummary = async (
  filters?: DateFilter
): Promise<any> => {
  try {
    const headers = getAuthHeaders();
    const response = await LocalApi.get(
      `/dashboard/attendace-department-summary`,
      {
        params: filters,
        headers
      }
    );
    return response.data;
  } catch (error) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
      throw new Error(
        axiosError.response?.data?.message || 'Failed to fetch department summary'
      );
    }
    console.error('General error:', error);
    throw error;
  }
};

/**
 * Fetch 10 latest payrolls needing approval
 * Optional: date range filter
 */
export const getLatestPayrollsToApprove = async (
  filters?: DateFilter
): Promise<any> => {
  try {
    const headers = getAuthHeaders();
    const response = await LocalApi.get(
      `/dashboard/get-ten-latest-payrolls-to-approve`,
      {
        params: filters,
        headers
      }
    );
    return response.data;
  } catch (error) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
      throw new Error(
        axiosError.response?.data?.message || 'Failed to fetch payrolls to approve'
      );
    }
    console.error('General error:', error);
    throw error;
  }
};

/**
 * Fetch loan totals: total loaned, repaid, remaining
 * Optional: date range filter
 */
export const getLoanTotals = async (
  filters?: DateFilter
): Promise<any> => {
  try {
    const headers = getAuthHeaders();
    const response = await LocalApi.get(`/dashboard/get-total-loan-details`, {
      params: filters,
      headers
    });
    return response.data;
  } catch (error) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
      throw new Error(
        axiosError.response?.data?.message || 'Failed to fetch loan totals'
      );
    }
    console.error('General error:', error);
    throw error;
  }
};

/**
 * Fetch employee counts per position
 * Optional: date range filter
 */
export const getPositionEmployeeCounts = async (
  filters?: DateFilter
): Promise<any> => {
  try {
    const headers = getAuthHeaders();
    const response = await LocalApi.get(
      `/dashboard/employee-position-counts`,
      { params: filters, headers }
    );
    return response.data;
  } catch (error) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
      throw new Error(
        axiosError.response?.data?.message || 'Failed to fetch position counts'
      );
    }
    console.error('General error:', error);
    throw error;
  }
};

/**
 * Fetch payroll amount summary
 * Optional: date range filter OR specify year/month
 */
export const getPayrollAmountSummary = async (
  params?: PayrollSummaryParams
): Promise<any> => {
  try {
    const headers = getAuthHeaders();
    const response = await LocalApi.get(
      `/dashboard/payroll-total-paid-monthly-for-year`,
      {
        params,
        headers
      }
    );
    return response.data;
  } catch (error) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Axios error:', axiosError.response?.data || axiosError.message);
      throw new Error(
        axiosError.response?.data?.message || 'Failed to fetch payroll summary'
      );
    }
    console.error('General error:', error);
    throw error;
  }
};
