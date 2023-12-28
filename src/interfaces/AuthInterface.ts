export interface UserDataInterface {
    id?: string;
    username?: string;
    email?: string;
    name: string;
    password: string;
}

export interface AuthState {
    data: any | null;
    isAuthenticated: boolean;
}

export interface RefreshTokenResponseInferFace {
    access_token: string;
    refresh_token: string;
}
export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
}