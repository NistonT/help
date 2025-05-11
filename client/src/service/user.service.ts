import { axiosWithAuto } from "@/api/interceptors";
import { TypeUserForm } from "@/type/auth.type";
import { IUser } from "@/type/user.type";
import { AxiosResponse } from "axios";

class UserService {
	private BASE_URL = "/user";

	// Получение пользователя по id
	public async getUserId(): Promise<AxiosResponse<IUser>> {
		const response = await axiosWithAuto.get<IUser>(`${this.BASE_URL}/user_id`);
		return response;
	}

	// Обновление пользователя
	public async updateUser(data: TypeUserForm): Promise<AxiosResponse<IUser>> {
		const response = await axiosWithAuto.put(`${this.BASE_URL}/update`, data);
		return response;
	}
}

export const userService = new UserService();
