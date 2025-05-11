import { ITask } from "./task.type";

export interface ICategory {
	id: number;
	CreatedAt: string;
	UpdatedAt: string;

	name: string;
	Task: ITask[];
}
