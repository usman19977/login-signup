import { AxiosResponse } from "axios";
import { handleApiError, protectedInstance as api } from './Axios';
import { LOGIN, SIGNUP, LOGOUT, GET_USER_DETAIL, REFRESH_TOKEN } from "../constants/endpoints";
import { SignOutMetaDataInterface, UserDataInterface } from "../interfaces/AuthInterface";

export const signUp = async (userData: UserDataInterface) => {
    try {
        const response = await api.post(SIGNUP, userData);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

export const logIn = async (credentials: any): Promise<AxiosResponse> => {
    try {
        const response = await api.post(LOGIN, credentials);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

export const logOut = async (metaData: SignOutMetaDataInterface): Promise<AxiosResponse> => {
    try {
        const response = await api.post(LOGOUT, metaData);
        return response;
    } catch (error: any) {
        handleApiError(error);
        throw error;
    }
};

export const getUser = async (id: string): Promise<AxiosResponse> => {
    try {
        const response = await api.get(GET_USER_DETAIL(id));
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