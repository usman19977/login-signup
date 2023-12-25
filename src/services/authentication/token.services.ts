class TokenService {
    ACCESS_TOKEN: string;
    REFRESH_TOKEN: string;
    constructor() {
        this.ACCESS_TOKEN = 'access_token';
        this.REFRESH_TOKEN = 'refresh_token';
    }



    setAuthenticatedToken = (token: string): void => {
        localStorage.setItem(this.ACCESS_TOKEN, JSON.stringify(token));
    };

    getAuthenticatedToken = (): string | null => {
        const storedToken = localStorage.getItem(this.ACCESS_TOKEN);
        return storedToken ? JSON.parse(storedToken) : null;
    };

    clearAuthenticatedToken = (): void => {
        localStorage.removeItem(this.ACCESS_TOKEN);
    };


    setRefreshToken = (token: string): void => {
        localStorage.setItem(this.REFRESH_TOKEN, JSON.stringify(token));
    };

    getRefreshToken = (): string | null => {
        const storedToken = localStorage.getItem(this.REFRESH_TOKEN);
        return storedToken ? JSON.parse(storedToken) : null;
    };

    clearRefreshToken = (): void => {
        localStorage.removeItem(this.REFRESH_TOKEN);
    };


}
const TokenServiceInstance = new TokenService();
export default TokenServiceInstance;