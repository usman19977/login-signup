import TokenService from '../authentication/token.services';
import { logIn, signUp, getUser, logOut, getRefreshToken } from '../../api/AuthApi';
import { RefreshTokenResponseInferFace, SignOutMetaDataInterface, UserDataInterface } from '../../interfaces/AuthInterface';

class AuthService {
    TAG: string;
    constructor() {
        this.TAG = 'auth.services.ts'
    }
    authenticateUser = async (email: string, password: string): Promise<void> => {
        const logTitle = `${this.TAG} ==> getUserDetails`;
        try {
            const response = await logIn({ email, password });
            const { accessToken, user } = response.data;

            // Store the JWT token in localStorage for future requests
            TokenService.setAuthenticatedToken(accessToken);
            return user;
            // TODO:: Store user in redux / context for state management 
        } catch (error: any) {
            // Handle authentication failure
            console.error(logTitle, error.message);
            throw error;
        }
    };

    getUserDetails = async (id: string): Promise<void> => {
        const logTitle = `${this.TAG} ==> getUserDetails`;
        try {
            const response = await getUser(id);
            const { user } = response.data;
            return user;
        }
        catch (error: any) {
            console.error(logTitle, error.message);
            throw error;
        }
    }

    signOut = async (signOutMetaData: SignOutMetaDataInterface): Promise<void> => {
        const logTitle = `${this.TAG} ==> signOut`;
        try {
            await logOut(signOutMetaData);
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
            await signUp(userData);
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
