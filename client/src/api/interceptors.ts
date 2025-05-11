import {
	getAccessToken,
	removeFromStorage,
} from "@/service/auth-token.service";
import { authorizationService } from "@/service/auth.service";
import axios, { CreateAxiosDefaults } from "axios";
import { errorCatch } from "./error";

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};

// Без проверки на авторизацию
const axiosClassic = axios.create(options);

// Проверка на авторизацию
const axiosWithAuto = axios.create(options);

// Перехватчик запроса
axiosWithAuto.interceptors.request.use(config => {
	const accessToken = getAccessToken();

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
});

// Перехватчик ответа
axiosWithAuto.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;

		if (
			(error?.response?.status === 401 || errorCatch(error) === "jwt expired",
			errorCatch(error) === "jwt must be provided") &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await authorizationService.getNewToken();
				return axiosWithAuto.request(originalRequest);
			} catch {
				if (errorCatch(error) === "jwt expired") removeFromStorage();
			}
		}
	}
);

export { axiosClassic, axiosWithAuto };
