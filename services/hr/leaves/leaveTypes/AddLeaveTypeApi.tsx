import axios from "axios";
import LocalApi from "../../localApi"; 

export interface CreateLeaveRequestPayload {
  color: string;   
  name?: string;
  days?: number; 
  image?: string;
  is_paid?: boolean;
  created_by?:number;
  updated_by?:number;
}

export const createLeaveType = async (
  payload: CreateLeaveRequestPayload
): Promise<any> => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }
    const response = await LocalApi.post("/create/leave-types", payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to create leave type");
    } else if (error instanceof Error) {
      console.error("Non-Axios error:", error.message);
      throw new Error(error.message || "Failed to create leave type");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to create leave type");
    }
  }
};
