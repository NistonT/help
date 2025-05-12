import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { LogIn, LucideIcon, UserRound } from "lucide-react";

export interface IHeaderLinksConstants {
	icon: LucideIcon;
	name: string;
	link: string;
}

export const headerLinksConstants: IHeaderLinksConstants[] = [
	{ icon: LogIn, name: "Авторизация", link: DASHBOARD_PAGES.AUTHORIZATION },
	{ icon: UserRound, name: "Регистрация", link: DASHBOARD_PAGES.REGISTRATION },
];
