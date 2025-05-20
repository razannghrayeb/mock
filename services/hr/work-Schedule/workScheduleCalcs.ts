// src/api/workScheduleCalcs.ts
import axios from 'axios';
import LocalApi from '../localApi';

/* ─────────────────── Types ─────────────────── */

export type WorkStatus = 'Pending' | 'Approved' | 'Rejected';

export interface WorkScheduleCalcPayload {
  employee_id: number;
  year: number;
  month: number;

  expected_hours: number;
  actual_hours: number;

  overtime_hours?: number;
  undertime_hours?: number;
  overtime_amount?: number;
  undertime_amount?: number;

  ot_multiplier: number;

  generated_by?: number;
}

export interface UpdateWorkScheduleCalcPayload
  extends Partial<WorkScheduleCalcPayload> {
  id: number;          // primary key
}

export interface RecalculatePayload {
  year: number;
  month: number;
  ot_multiplier: number;
  generated_by?: number;  // Added missing property
}

export interface StatusUpdatePayload {
  id: number;
  status: WorkStatus;
  approved_by: number;
}

/* ─────────────────── Helpers ─────────────────── */

const token = () => {
  const t = localStorage.getItem('token');
  if (!t) throw new Error('No access token found in local storage');
  return t;
};

const headers = () => ({
  Authorization: token(),
  Language: 'en',
});

/* ─────────────────── CRUD ─────────────────── */

// POST /api/hr_work_schedule_calcualtions
export const createWorkScheduleCalc = async (
  payload: WorkScheduleCalcPayload,
): Promise<any> => {
  try {
    const res = await LocalApi.post('/hr_work_schedule_calcualtions', payload, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Failed to create calculation');
    }
    throw err;
  }
};

// PUT /api/hr_work_schedule_calcualtions/:id
export const updateWorkScheduleCalc = async (
  payload: UpdateWorkScheduleCalcPayload,
): Promise<any> => {
  try {
    const { id, ...fields } = payload;
    const res = await LocalApi.put(`/hr_work_schedule_calcualtions/${id}`, fields, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Failed to update calculation');
    }
    throw err;
  }
};

// DELETE /api/hr_work_schedule_calcualtions/:id
export const deleteWorkScheduleCalc = async (id: number): Promise<any> => {
  try {
    const res = await LocalApi.delete(`/hr_work_schedule_calcualtions/${id}`, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Failed to delete calculation');
    }
    throw err;
  }
};

// GET /api/hr_work_schedule_calcualtions
export const getAllWorkScheduleCalcs = async (): Promise<any> => {
  try {
    const res = await LocalApi.get('/hr_work_schedule_calcualtions', {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Failed to fetch calculations');
    }
    throw err;
  }
};

// GET /api/hr_work_schedule_calcualtions/:id
export const getWorkScheduleCalcById = async (id: number): Promise<any> => {
  try {
    const res = await LocalApi.get(`/hr_work_schedule_calcualtions/${id}`, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Failed to fetch calculation');
    }
    throw err;
  }
};

/* ─────────────────── Domain actions ─────────────────── */

// POST /api/work-hours/recalculate
export const recalculateWorkHours = async (
  payload: RecalculatePayload,
): Promise<any> => {
  try {
    const res = await LocalApi.post('/work-hours/recalculate', payload, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Failed to recalculate hours');
    }
    throw err;
  }
};

// PATCH /api/work-hours/status/:id
export const updateWorkScheduleStatus = async (
  payload: StatusUpdatePayload,
): Promise<any> => {
  try {
    const { id, ...body } = payload;
    const res = await LocalApi.patch(`/work-hours/status/${id}`, body, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Failed to update status');
    }
    throw err;
  }
};