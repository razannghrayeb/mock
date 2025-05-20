// src/api/contracts.ts
import axios from 'axios';
import LocalApi from '../localApi';

/* ─────────────────── Types ─────────────────── */

export type ContractType = 'daily' | 'weekly' | 'monthly';

export interface DailyBreakdownEntry {
  [dateISO: string]: number | { hours: number };
}

export interface CreateContractPayload {
  employee_id?: number | number[];
  employee_ids?: number[];
  year: number;
  month: number;
  contract_type: ContractType;
  expected_hours?: number;
  daily_breakdown?: DailyBreakdownEntry;
  created_by?: number;
}

export interface UpdateContractPayload {
  id: number;
  employee_id?: number;
  year?: number;
  month?: number;
  contract_type?: ContractType;
  expected_hours?: number;
  daily_breakdown?: DailyBreakdownEntry;
  updated_by?: number;
}

/* ─────────────────── Helpers ─────────────────── */

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No access token found in local storage');
  return token;
};

const authHeaders = () => ({
  Authorization: getToken(),
  Language: 'en',
});

/* ─────────────────── CRUD ─────────────────── */

// POST /api/create/contracts
export const createContract = async (payload: CreateContractPayload): Promise<any> => {
  try {
    const res = await LocalApi.post('/create/contracts', payload, { headers: authHeaders() });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Failed to create contract');
    }
    throw err;
  }
};

// PATCH /api/update/contracts/:id
export const updateContract = async (payload: UpdateContractPayload): Promise<any> => {
  try {
    const { id, ...fields } = payload;
    const res = await LocalApi.patch(`/update/contracts/${id}`, fields, { headers: authHeaders() });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Failed to update contract');
    }
    throw err;
  }
};

// DELETE /api/delete/contracts/:id
export const deleteContract = async (id: number): Promise<any> => {
  try {
    const res = await LocalApi.delete(`/delete/contracts/${id}`, { headers: authHeaders() });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Failed to delete contract');
    }
    throw err;
  }
};

// GET /api/contracts/:emp/:year/:month
export const getContractDetails = async (
  employeeId: number,
  year: number,
  month: number,
): Promise<any> => {
  try {
    const res = await LocalApi.get(`/contracts/${employeeId}/${year}/${month}`, {
      headers: authHeaders(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Failed to fetch contract details');
    }
    throw err;
  }
};

// GET /api/contracts/id/:id
export const getContractById = async (id: number): Promise<any> => {
  try {
    const res = await LocalApi.get(`/contracts/${id}`, { headers: authHeaders() });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Failed to fetch contract');
    }
    throw err;
  }
};

// GET /api/contracts
export const getAllContracts = async (): Promise<any> => {
  try {
    const res = await LocalApi.get('/contracts', { headers: authHeaders() });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Failed to fetch contracts');
    }
    throw err;
  }
};
