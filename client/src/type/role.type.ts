import { IUser } from "./user.type";

export interface IRole {
	id: number;
	CreatedAt: string;
	UpdatedAt: string;

	code: string;
	name: string;

	User: IUser[];
}
