import baseApi from './baseApi';
import axios from 'axios';

export const bulkDeleteUser = async (option: { ids: any }) => {
  try {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authorization token is missing in localStorage');
    }
    const formdata = new FormData();
    formdata.append('ids', JSON.stringify(option.ids));
    const apiInstance = await baseApi;
    // Make DELETE request with the dynamically retrieved token
    const response = await apiInstance.post(
      '/bulk-delete',
      formdata,
      {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data', // Set the content type to JSON
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Delete Users failed');
    } else {
      throw new Error('Delete Users failed');
    }
  }
};
