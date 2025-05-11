import { IDepartment } from "./department.type";
import { IRole } from "./role.type";
import { ISupport } from "./support.type";
import { ITask } from "./task.type";

export interface IUser {
	id: number;
	login: string;
	name: string;
	number: string;
	email: string;
	password: string;

	CreatedAt: string;
	UpdatedAt: string;

	role: IRole;
	roleId: number;

	department: IDepartment;
	departmentId: number;

	Support: ISupport[];
	Task: ITask[];
}
