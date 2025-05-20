import axios from 'axios';
import baseApi from './baseApi';

export interface CreateUserPayload {
    name: string;
    userName: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    gender: 'Male' | "Female";
    active: 'true' | 'false';
}

export const createUser = async (
    data: FormData
): Promise<any> => {
    try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('No access token found in localStorage');
        }

        // Log the payload for debugging
        console.log('Payload to be sent:', data);

        const apiInstance = await baseApi;
        const response = await apiInstance.post('/create-user', data, {
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
            throw new Error(error.response?.data?.message || 'Failed to create user');
        } else {
            console.error('Non-Axios error:', error);
            throw new Error('Failed to create user');
        }
    }
};
