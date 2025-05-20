import axios from "axios";
import LocalApi from "../../localApi";

export interface UpdateSalaryAddonPayload {
  id: number;
  employee_id?: number;
  title?: string;
  type_id?: number;
  amount?: number;
  date?: string;
  status?: string;
  for_month?: number;  // New field replacing end_date
  for_year?: number;   // New field replacing end_date
}

export const updateSalaryAddon = async (
  payload: UpdateSalaryAddonPayload
): Promise<any> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }
    const { id, ...fieldsToUpdate } = payload;
    const response = await LocalApi.put(`/update/salary-addons/${id}`, fieldsToUpdate, {
      headers: {
        Authorization: token,
        Language: "en",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "Failed to update salary addon"
      );
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
      throw new Error(error.message || "Failed to update salary addon");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to update salary addon");
    }
  }
};
