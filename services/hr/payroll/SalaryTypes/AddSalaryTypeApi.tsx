// services/hr/salary/SalaryTypeApi.ts
import axios from "axios";
import LocalApi from "../../localApi";

export interface CreateSalaryRequestPayload {
  name: string;
  type: "deduction" | "induction" | "advance";
  frequency: "daily" | "monthly" | "continuous" | "yearly" | "one-time";
}

export const createSalaryType = async (
  payload: CreateSalaryRequestPayload
): Promise<any> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    const response = await LocalApi.post("/create/salary-types", payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "Failed to create salary type"
      );
    } else if (error instanceof Error) {
      console.error("Non-Axios error:", error.message);
      throw new Error(error.message || "Failed to create salary type");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to create salary type");
    }
  }
};