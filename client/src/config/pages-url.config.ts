class DASHBOARD {
	private root = "/i";

	HOME = "/";
	AUTHORIZATION = `/authorization`;
	REGISTRATION = `/registration`;
	PROFILE = `${this.root}/profile`;
	ADMIN_PANEL = `${this.root}/admin-panel`;
	TASK = `${this.root}/task`;
	TASKS = `${this.root}/tasks`;
}

export const DASHBOARD_PAGES = new DASHBOARD();
