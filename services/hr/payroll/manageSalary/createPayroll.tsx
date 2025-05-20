// services/hr/payroll/GeneratePayrollApi.ts
import axios from "axios";
import LocalApi from "../../localApi"; // or wherever you keep your LocalApi config

export interface CreatePayrollPayload {
  payment_month: number;
  payment_year: number;
  generated_by: number;
  employee_id: number;
  manager_id: number;
  currency_id: number;
}

export const createPayroll = async ({
  payment_month,
  payment_year,
  generated_by,
  employee_id,
  manager_id,
  currency_id
}: CreatePayrollPayload): Promise<any> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No access token found in local storage");
    }

    const payload = {
      payment_month,
      payment_year,
      generated_by,
      employee_id,
      manager_id,
      currency_id
    };

    // Calls /create/payroll endpoint
    const response = await LocalApi.post("/create/payroll", payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "Failed to generate payroll"
      );
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
      throw new Error(error.message || "Failed to generate payroll ");
    } else {
      console.error("Unknown error:", error);
      throw new Error("Failed to generate payroll ");
    }
  }
};
