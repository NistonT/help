import { IUser } from "./user.type";

export interface IDepartment {
	id: number;
	CreatedAt: string;
	UpdatedAt: string;

	code: string;
	name: string;
	User: IUser[];
}
