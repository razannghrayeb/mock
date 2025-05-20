import axios from 'axios';
import baseApi from './baseApi';

export interface EditProfilePayload {
    formData: FormData;
}

export const editProfile = async (data: FormData): Promise<any> => {
    try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('Authorization token is missing in localStorage');
        }

        // Log the payload for debugging
        console.log('Payload to be sent for update:', Array.from(data.entries()));

        const apiInstance = await baseApi;
        const response = await apiInstance.post('/edit-profile', data, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data', // Specify correct Content-Type
                Language: 'en', // Optional header for language (default: 'en')
            },
        });

        return response.data; // Return the response data (e.g., message or updated details)
    } catch (error: any) {
        // Handle errors if any occur during the request
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.data?.message || error.message || 'Failed to update store';
            console.error('Axios error:', errorMessage);
            throw new Error(errorMessage);
        } else {
            console.error('Non-Axios error:', error.message || 'An unknown error occurred');
            throw new Error('Failed to update store');
        }
    }
};
