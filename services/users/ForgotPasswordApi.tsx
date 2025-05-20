import axios from 'axios';
import baseApi from './baseApi';

export interface ForgetPassword {
    userName: string;
}

export const forgetPassword = async (
    data: ForgetPassword
): Promise<any> => {
    try {
        // Make POST request using axios
        const apiInstance = await baseApi;
        const response = await apiInstance.get('/forget-password', {
            params: data,
            headers: {
                Language: 'en', // Optional header for language (default: 'en')
            },
        });

        return response.data; // Return the response data (e.g., message or store details)
    } catch (error: any) {
        // Handle errors during the request
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Failed to send forget password req');
        } else {
            console.error('Non-Axios error:', error);
            throw new Error('Failed to send forget password req');
        }
    }
};
