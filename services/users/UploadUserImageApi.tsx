import baseApi from './baseApi';
import axios from 'axios';

interface AxiosErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

interface UploadConfig {
  headers: {
    Authorization: string;
    'Content-Type': string;
  };
  onUploadProgress: (progressEvent: { loaded: number; total: number }) => void;
}

export const uploadUserImage = async (
    file: File,
    definer: string,
    onUploadProgress: (progressEvent: { loaded: number; total: number }) => void
) => {
    try {
        console.log("Starting file upload process...");

        // Retrieve token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error("Authorization token is missing from localStorage");
        }

        console.log("Authorization Token:", token);

        // Prepare FormData
        const formData = new FormData();
        formData.append('file', file);
        formData.append('definer', definer);

        // Make the API request
        const apiInstance = await baseApi;
        const response = await apiInstance.post('/upload-file', formData, {
            headers: {
                Authorization: token, // Add Bearer prefix if required by your backend
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress,
        } as UploadConfig);

        console.log("File upload successful. Response:", response.data);
        return response.data;
    } catch (error: any) {
        // Log and handle the error
        console.error("Unexpected error during file upload:", error);

        if (error && typeof error === 'object' && 'isAxiosError' in error) {
            const axiosError = error as AxiosErrorResponse;
            throw new Error(axiosError.response?.data?.message || 'Upload file failed');
        } else {
            throw new Error('Upload file failed');
        }
    }
};

