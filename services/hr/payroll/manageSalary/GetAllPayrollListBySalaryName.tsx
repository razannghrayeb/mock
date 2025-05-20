import localApi from "../../localApi";
import axios from "axios";

export const getPayrollListDataBySalaryName = async (salaryName: string) => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error("Authorization token is missing in localStorage");
    }

    // Make a GET request with the salaryName in the URL
    const response = await localApi.get(`/get-all/payroll-lists/${salaryName}`, {
      headers: {
        Authorization: token, // Ensure the token includes any necessary Bearer prefix if required
        Language: "en", // Optional: set a default language header
      },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch Payroll List details by salary name."
      );
    } else {
      throw new Error(
        "An unexpected error occurred while fetching Payroll List details by salary name."
      );
    }
  }
};
