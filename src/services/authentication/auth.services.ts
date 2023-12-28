import TokenService from '../authentication/token.services';
import { logIn, signUp, getUser, logOut, getRefreshToken } from '../../api/AuthApi';
import { RefreshTokenResponseInferFace, UserDataInterface } from '../../interfaces/AuthInterface';

class AuthService {
    TAG: string;
    constructor() {
        this.TAG = 'auth.services.ts'
    }
    authenticateUser = async (username: string, password: string): Promise<void> => {
        const logTitle = `${this.TAG} ==> authenticateUser`;
        try {
            const response = await logIn({ username, password });
            const { tokens, user } = response.data;
            const { accessToken, refreshToken } = tokens;
            /**
             * We can use httpOnly COOKIE AS WELL TO AVOID XSS ATTACKS 
               FOR NOW SAVING TOKEN IN LOCAL STORAGE
             */

            TokenService.setAuthenticatedToken(accessToken);
            TokenService.setRefreshToken(refreshToken);
            return user;

        } catch (error: any) {
            // Handle authentication failure
            console.error(logTitle, error.message);
            throw error;
        }
    };

    getUserDetails = async (): Promise<void> => {
        const logTitle = `${this.TAG} ==> getUserDetails`;
        try {
            const response = await getUser();
            const { user } = response.data;
            return user;
        }
        catch (error: any) {
            console.error(logTitle, error.message);
            throw error;
        }
    }

    signOut = async (): Promise<void> => {
        const logTitle = `${this.TAG} ==> signOut`;
        try {
            await logOut();
            TokenService.clearAuthenticatedToken();
        }
        catch (error: any) {
            console.error(logTitle, error.message);
            throw error;
        }
    };

    isAuthenticated = (): boolean => {
        const accessToken = TokenService.getAuthenticatedToken();
        return !!accessToken;
    };

    register = async (userData: UserDataInterface): Promise<void> => {
        const logTitle = `${this.TAG} ==> register`;
        try {
            let response = await signUp(userData);
            const { tokens, user } = response.data;
            const { accessToken, refreshToken } = tokens;
            /**
             * We can use httpOnly COOKIE AS WELL TO AVOID XSS ATTACKS 
               FOR NOW SAVING TOKEN IN LOCAL STORAGE
             */

            TokenService.setAuthenticatedToken(accessToken);
            TokenService.setRefreshToken(refreshToken);
            return user;
        }
        catch (error: any) {
            console.error(logTitle, error.message);
            throw error;
        }
    };

    getRefreshToken = async (): Promise<RefreshTokenResponseInferFace> => {
        const logTitle = `${this.TAG} ==> getRefreshToken`;
        try {
            const response = await getRefreshToken();
            const { tokens } = response.data;
            return tokens;
        }
        catch (error: any) {
            console.error(logTitle, error.message);
            throw error;
        }
    }

}

export default AuthService;
