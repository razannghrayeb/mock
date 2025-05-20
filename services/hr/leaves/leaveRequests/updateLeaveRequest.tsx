// src/services/hr/leave-requests/updateLeaveRequest.ts
import axios from "axios";
import LocalApi from "../../localApi";

export interface UpdateLeaveRequestPayload {
  id: number;          // The unique ID (primary key) of the hr_leave_requests row
  employee_id?: number;
  leave_type_id?: number;
  start_date?: string;
  end_date?: string;
  reason?: string;
  manager_id?: number;
  total_days?: number;
  status?: "Approved" | "Pending" | "Rejected";
  // New approval fields (required when status is "Approved")
  approved_date?: string;
  approved_days?: number;
}

export const updateLeaveRequest = async (
  payload: UpdateLeaveRequestPayload
): Promise<any> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    // Destructure ID and pass the rest as fields to update
    const { id, ...fieldsToUpdate } = payload;

    // Put request to /update/leave-requests/:id
    const response = await LocalApi.put(
      `/update/leave-requests/${id}`,
      fieldsToUpdate,
      {
        headers: {
          Authorization: token,
          Language: "en", // optional
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to update leave request");
    } else if (error instanceof Error) {
      console.error("Non-Axios error:", error.message);
      throw new Error(error.message || "Failed to update leave request");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to update leave request");
    }
  }
};
