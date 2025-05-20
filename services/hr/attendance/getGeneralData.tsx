import axios from 'axios';
import LocalApi from '../localApi';

export const getGeneralData = async () => {
  try {
    const response = await LocalApi.get('general-data');
    return response.data;
   
  } catch (error: any) {
    if (error.isAxiosError) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Fetching general data failed');
    } else {
      console.error('Non-Axios error:', error.message || 'Fetching general data failed');
      throw new Error('Fetching general data failed');
    }
  }
};
function isAxiosError(error: any) {
  throw new Error('Function not implemented.');
}

