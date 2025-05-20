// src/services/hr/attendance/ToggleClockApi.ts
import axios from "axios";
import LocalApi from "../../localApi";

interface AxiosErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export interface ToggleClockPayload {
  // If attendance_id is provided, the service updates an existing record.
  attendance_id?: number;
  employee_id: number;
  // Optional: custom clock_in (useful for backdating a clock in)
  clock_in?: string;
  // Optional: custom clock_out (or use "date" field for a clock out value)
  clock_out?: string;
  // "date" can be used as the clock_out time if provided.
  date?: string;
  // Additional optional fields
  quote?: string;
  manager_id?: number;
  current_activity?: string;
  time_zone?: string;
}

export const toggleClock = async (payload: ToggleClockPayload) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    console.log("Sending toggle clock request with payload:", payload);

    const response = await LocalApi.post(
      "/attendance",
      payload,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (error && typeof error === 'object' && 'isAxiosError' in error) {
      const axiosError = error as AxiosErrorResponse;
      console.error("Axios error:", axiosError.response?.data || axiosError.message);
      console.error("Axios error details:", axiosError.response);
      throw new Error(
        axiosError.response?.data?.message || "Toggle clock request failed"
      );
    } else {
      console.error(
        "Non-Axios error:",
        error.message || "Toggle clock request failed"
      );
      throw new Error("Toggle clock request failed");
    }
  }
};
