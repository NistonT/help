import { userService } from "@/service/user.service";
import { useAuthStore } from "@/store/auth.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useProfile = () => {
	const {
		isAdmin,
		isAuth,
		setIsAdminFalse,
		setIsAuthFalse,
		setIsAdminTrue,
		setIsAuthTrue,
	} = useAuthStore();

	const { data: profile, isLoading } = useQuery({
		queryKey: ["profile"],
		queryFn: () => userService.getUserId(),
	});

	useEffect(() => {
		console.log(profile);

		if (profile?.data) {
			setIsAuthTrue();
		} else {
			setIsAuthFalse();
		}
	}, [profile]);

	return { profile: profile?.data, isLoading, isAuth };
};
