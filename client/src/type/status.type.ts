import { ITask } from "./task.type";

export interface IStatus {
	id: number;
	CreatedAt: string;
	UpdatedAt: string;

	code: string;
	name: string;

	Task: ITask[];
}
