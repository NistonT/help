import { IUser } from "./user.type";

export interface ISupport {
	id: number;
	CreatedAt: string;
	UpdatedAt: string;

	user: IUser;
	userId: number;

	title: string;
	message: string;
	admin?: string;
}
