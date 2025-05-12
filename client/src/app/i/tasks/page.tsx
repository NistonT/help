import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Заявки",
	...NO_INDEX_PAGE,
};

export default function TasksPage() {
	return <>Tasks</>;
}
