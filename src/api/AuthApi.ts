import { AxiosResponse } from "axios";
import { handleApiError, protectedInstance as api, normalInstance } from './Axios';
import { LOGIN, SIGNUP, LOGOUT, GET_USER_DETAIL, REFRESH_TOKEN } from "../constants/endpoints";
import { UserDataInterface } from "../interfaces/AuthInterface";

export const signUp = async (userData: UserDataInterface) => {
    try {
        const response = await normalInstance.post(SIGNUP, userData);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

export const logIn = async (credentials: any): Promise<AxiosResponse> => {
    try {
        const response = await normalInstance.post(LOGIN, credentials);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

export const logOut = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.post(LOGOUT);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

export const getUser = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.get(GET_USER_DETAIL);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
}

export const getRefreshToken = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.get(REFRESH_TOKEN);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
}