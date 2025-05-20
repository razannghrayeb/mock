import axios from 'axios';
import baseApi from './baseApi';

export interface NewPasswordPayload {
    old_password: string;
    new_password: string,
}

export const changeOwnPassword = async (
    data: NewPasswordPayload
): Promise<any> => {
    try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('No access token found in localStorage');
        }
        // Make POST request using axios
        const apiInstance = await baseApi;
        const response = await apiInstance.post('/change-own-password', data, {
            headers: {
                Authorization: token,
                Language: 'en', // Optional header for language (default: 'en')
            },
        });

        return response.data; // Return the response data (e.g., message or store details)
    } catch (error: any) {
        // Handle errors during the request
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Failed to change password');
        } else {
            console.error('Non-Axios error:', error);
            throw new Error('Failed to change password');
        }
    }
};
