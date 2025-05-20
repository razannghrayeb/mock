import localApi from "../../localApi";
import axios from "axios";

export const getPayrollListDataById = async (id: number) => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error("Authorization token is missing in localStorage");
    }

    // Make GET request with the `id` in query parameters
    const response = await localApi.get(`/get-by-id/payroll-list/${id}`, {
      headers: {
        Authorization: token, // Ensure Bearer prefix is included
        Language: "en", // Optional, default is 'en'
      },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch Payroll List details."
      );
    } else {
      throw new Error(
        "An unexpected error occurred while fetching Payroll List details."
      );
    }
  }
};
