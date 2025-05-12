import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Регистрация",
	...NO_INDEX_PAGE,
};

export function RegistrationPage() {
	return <>регистрация</>;
}
