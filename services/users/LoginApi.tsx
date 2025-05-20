import axios, { isAxiosError } from 'axios';
import baseApi from './baseApi';

export interface LoginPayload {
    userName: string;
    password: string,
    fcmToken: string,
}

export const login = async (
    data: LoginPayload
): Promise<any> => {
    try {
        // Log the payload for debugging
        console.log('Payload to be sent:', data);

        // Make POST request using axios
        const apiInstance = await baseApi;
        const response = await apiInstance.post('/login', data, {
            headers: {
                Language: 'en', // Optional header for language (default: 'en')
            },
        });

        return response.data; // Return the response data (e.g., message or store details)
    } catch (error: any) {
        // Handle errors during the request
        if (isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Failed to create user');
        } else {
            console.error('Non-Axios error:', error);
            throw new Error('Failed to create user');
        }
    }
};
