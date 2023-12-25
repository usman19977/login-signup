export interface UserDataInterface {
    id?: string;
    email: string;
    name: string;
    password: string;
}
export interface SignOutMetaDataInterface {
    id: string;
    access_token: string;
}

export interface AuthState {
    data: any | null;
    isAuthenticated: boolean;
}

export interface RefreshTokenResponseInferFace {
    access_token: string;
    refresh_token: string;
}
