import axios from "axios";
import LocalApi from "../../localApi";

export interface CreateSalaryAddonPayload {
  employee_id: number;
  title: string;
  type_id: number;
  amount: number;
  date: string;
  status?: string;
  end_date?: string;
  for_month: number; // New field
  for_year: number;  // New field
}

export const createSalaryAddon = async ({
  employee_id,
  title,
  type_id,
  amount,
  date,
  status,
  end_date,
  for_month, // New field
  for_year,  // New field
}: CreateSalaryAddonPayload): Promise<any> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    const payload = {
      employee_id,
      title,
      type_id,
      amount,
      date,
      status,
      end_date,
      for_month, // Include new field
      for_year,  // Include new field
    };

    const response = await LocalApi.post("/create/salary-addons", payload, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "Failed to create salary addon"
      );
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
      throw new Error(error.message || "Failed to create salary addon");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to create salary addon");
    }
  }
};
