import axios from "axios";
import LocalApi from "../../localApi"; // or wherever your localApi is defined

/**
 * Based on the hr_leave_requests fields:
 *  - employee_id         (number, required)
 *  - leave_type_id       (number, required)
 *  - start_date          (DATEONLY string, required)
 *  - end_date            (DATEONLY string, required)
 *  - reason              (string, optional)
 *  - manager_id          (number, optional)
 *  - total_days          (number, optional)
 *  - status              ('Approved'|'Pending'|'Rejected', default 'Pending')
 *  - approved_date       (string, optional) — full date-time string
 *  - approved_days       (number, optional)
 */
export interface CreateLeaveRequestPayload {
  employee_id: number;
  leave_type_id: number;
  start_date: string;  // e.g. "2025-04-01"
  end_date: string;    // e.g. "2025-04-05"
  reason?: string;
  manager_id?: number;
  total_days?: number; // e.g. 3.5
  status?: "Approved" | "Pending" | "Rejected";
  approved_date?: string;
  approved_days?: number;
}

export const createLeaveRequest = async (
  payload: CreateLeaveRequestPayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    // Send POST to your actual endpoint. Adjust as needed:
    // e.g. /create/leave-requests
    const response = await LocalApi.post("/create/leave-requests", payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to create leave request");
    } else if (error instanceof Error) {
      console.error("Non-Axios error:", error.message);
      throw new Error(error.message || "Failed to create leave request");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to create leave request");
    }
  }
};
