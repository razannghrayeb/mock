import axios from "axios";
import baseApi from "./baseApi";

export interface ChangeUserPasswordPayload {
    user_id: string;
    new_password: string;
}

export const changeUserPassword = async (
    data: ChangeUserPasswordPayload
): Promise<any> => {
    try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('No access token found in localStorage');
        }

        const apiInstance = await baseApi;
        const response = await apiInstance.post("/change-user-password", data, {
            headers: {
                Authorization: token,
                Language: "en",
            },
        });

        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Failed to change user password");
        } else {
            console.error("Non-Axios error:", error);
            throw new Error("Failed to change user password");
        }
    }
};
