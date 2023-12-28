import axios, { AxiosError, AxiosInstance } from 'axios';
import { API_BASE_URL } from '../constants/endpoints';

const TAG = 'Axios.ts'
const protectedInstance: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const normalInstance: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


const handleApiError = (error: AxiosError<unknown, any>) => {
    const logTitle = `${TAG} ==> handleApiError`;
    if (axios.isAxiosError(error)) {
        // AxiosError has a response property
        const response = error.response;

        if (response) {
            // The request was made and the server responded with a status code
            console.error(logTitle, response.status);
            console.error(logTitle, response.data);
            //We can basically do state management here for now just to save time alerting the error 
            alert(JSON.stringify(response.data));
        } else {
            // The request was made but no response was received
            console.error(logTitle, 'No response received from the server');
        }
    } else {
        // This is not an AxiosError (unexpected error format)
        console.error(`${logTitle} | Unexpected error format:`, error);
    }
};

export { protectedInstance, normalInstance, handleApiError };