import axios, { isAxiosError } from 'axios';
import baseApi from './baseApi';

export interface NewPasswordPayload {
    userName: string;
    code: string,
    password: string,
}

export const newPassword = async (
    data: NewPasswordPayload
): Promise<any> => {
    try {
        // Make POST request using axios
        const apiInstance = await baseApi;
        const response = await apiInstance.post('/reset-password', data, {
            headers: {
                Language: 'en', // Optional header for language (default: 'en')
            },
        });

        return response.data; // Return the response data (e.g., message or store details)
    } catch (error: any) {
        // Handle errors during the request
        if (isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Failed to change password');
        } else {
            console.error('Non-Axios error:', error);
            throw new Error('Failed to change password');
        }
    }
};
