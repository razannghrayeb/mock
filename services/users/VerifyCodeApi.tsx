import axios from 'axios';
import baseApi from './baseApi';

interface AxiosErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export interface VerifyCodePayload {
    userName: string;
    code: string;
}

export const verifyCode = async (
    data: VerifyCodePayload
): Promise<any> => {
    try {
        // Make POST request using axios
        const apiInstance = await baseApi;
        const response = await apiInstance.get('/verify-code', {
            params: data,
            headers: {
                Language: 'en', // Optional header for language (default: 'en')
            },
        });

        return response.data; // Return the response data (e.g., message or store details)
    } catch (error: any) {
        // Handle errors during the request
        if (error && typeof error === 'object' && 'isAxiosError' in error) {
            const axiosError = error as AxiosErrorResponse;
            console.error('Axios error:', axiosError.response?.data || axiosError.message);
            throw new Error(axiosError.response?.data?.message || 'Failed to verify code');
        } else {
            console.error('Non-Axios error:', error);
            throw new Error('Failed to verify code');
        }
    }
};
