import { axiosClassic } from "@/api/interceptors";
import {
	IAuthorizationRequest,
	IAuthorizationResponse,
	IRegistrationRequest,
} from "@/type/auth.type";
import { AxiosResponse } from "axios";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

export enum EnumTokens {
	"ACCESS_TOKEN" = "accessToken",
	"REFRESH_TOKEN" = "refreshToken",
}

class AuthorizationService {
	private BASE_URL = "/auth";

	// Авторизация пользователя
	public async authorizationLoginMain(
		data: IAuthorizationRequest
	): Promise<AxiosResponse<IAuthorizationResponse>> {
		const response = await axiosClassic.post<IAuthorizationResponse>(
			`${this.BASE_URL}/login`,
			data
		);

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
		return response;
	}

	// Регистрация пользователя
	public async registrationRegisterMain(
		data: IRegistrationRequest
	): Promise<AxiosResponse<IAuthorizationResponse>> {
		const response = await axiosClassic.post<IAuthorizationResponse>(
			`${this.BASE_URL}/register`,
			data
		);

		return response;
	}

	// Выдача нового токена
	public async getNewToken(): Promise<AxiosResponse<IAuthorizationResponse>> {
		const response = await axiosClassic.post<IAuthorizationResponse>(
			`${this.BASE_URL}/login/access-token`
		);

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

		return response;
	}

	// Выход из системы
	public async logout(): Promise<AxiosResponse<boolean>> {
		const response = await axiosClassic.post<boolean>(
			`${this.BASE_URL}/logout`
		);

		if (response.data) removeFromStorage();

		return response;
	}
}

export const authorizationService = new AuthorizationService();
