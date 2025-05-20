import axios from "axios";
import LocalApi from "../../localApi";

export interface UpdateLeaveTypePayload {
  id: number;
  color?: string;
  name?: string;
  days?: number;
  is_paid?: boolean;
  image?: string;
  updated_by?: number;
}

export const updateLeaveType = async (payload: UpdateLeaveTypePayload): Promise<any> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }
    const { id, ...fieldsToUpdate } = payload;
    const response = await LocalApi.put(`/update/leave-types/${id}`, fieldsToUpdate, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to update leave type");
    } else if (error instanceof Error) {
      console.error("Non-Axios error:", error.message);
      throw new Error(error.message || "Failed to update leave type");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to update leave type");
    }
  }
};
