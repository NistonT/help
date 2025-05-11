import { IUser } from "./user.type";

export interface IAuthorizationRequest {
	login: string;
	password: string;
}

export interface IAuthorizationResponse {
	accessToken: string;
	user: IUser;
}

export type TypeUserForm = Omit<IUser, "id"> & { password?: string };

export interface IRegistrationRequest {
	name: string;
	password: string;
	number: string;
	email: string;
	login: string;
	id_department: number;
}

export interface IRegistrationForm extends IRegistrationRequest {
	confirm_password: string;
	isConfirm: boolean;
}
