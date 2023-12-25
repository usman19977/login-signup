import { REFRESH_TOKEN, LOGIN } from '../../constants/endpoints'
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { normalInstance, protectedInstance } from '../../api/Axios';
import AuthService from '../../services/authentication/auth.services';
import TokenService from '../../services/authentication/token.services';
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}
protectedInstance.interceptors.request.use(
  async (config: any) => {
    let { url } = config;
    if (!config.headers) {
      config.headers = {};
    }
    if (url === REFRESH_TOKEN) {
      const refreshToken = TokenService.getRefreshToken();

      if (refreshToken) {
        config.headers['Authorization'] = 'Bearer ' + refreshToken; // for Spring Boot back-end
      }
    } else {
      const token = TokenService.getAuthenticatedToken();
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token; // for Spring Boot back-end
      }
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

protectedInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async (err: any) => {
    const originalConfig = err.config as CustomAxiosRequestConfig;
    if (originalConfig.url !== LOGIN && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry && originalConfig.url !== REFRESH_TOKEN) {
        originalConfig._retry = true;

        try {
          const authServices = new AuthService();
          const res = await authServices.getRefreshToken();
          TokenService.setAuthenticatedToken(res.access_token);
          TokenService.setRefreshToken(res.refresh_token);
          return protectedInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export { normalInstance, protectedInstance };
