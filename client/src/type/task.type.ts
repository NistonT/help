import { ICategory } from "./category.type";
import { IStatus } from "./status.type";
import { IUser } from "./user.type";

export interface ITask {
	id: number;
	CreatedAt: string;
	UpdatedAt: string;

	user: IUser;
	userId: number;

	category: ICategory;
	categoryId: number;

	status: IStatus;
	statusId: number;

	description: string;
}
