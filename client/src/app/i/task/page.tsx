import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Заявка",
	...NO_INDEX_PAGE,
};

export function TaskPage() {
	return <>Task</>;
}
