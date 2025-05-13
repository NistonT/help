"use client";
import { RegisterClient } from "@/components/Main/RegisterClient";
import { TitleScreen } from "@/components/Main/TitleScreen";

export const Main = () => {
	return (
		<div>
			<TitleScreen />
			<RegisterClient />
		</div>
	);
};
