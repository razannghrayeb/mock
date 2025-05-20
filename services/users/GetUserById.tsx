import axios, { isAxiosError } from 'axios';
import baseApi from './baseApi';


export const getUserById = async (id: number
): Promise<any> => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('Authorization token is missing in localStorage');
        }

        const apiInstance = await baseApi;
        const response = await apiInstance.get('/get-user-by-id', {
            params: {
                userId: id
            },
            headers: {
                Authorization: token,
                Language: 'en',
            },
        });

        return response.data;
    } catch (error: any) {
        if (isAxiosError(error)) {
            const errorMessage =
                error.response?.data?.message || error.message || 'Failed to get user with access';
            console.error('Axios error:', errorMessage);
            throw new Error(errorMessage);
        } else {
            console.error('Non-Axios error:', error.message || 'An unknown error occurred');
            throw new Error('Failed to get user with access');
        }
    }
};
