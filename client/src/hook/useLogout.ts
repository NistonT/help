import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { authorizationService } from "@/service/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogout = () => {
	const { push } = useRouter();

	const { isAdmin, isAuth, setIsAdminFalse, setIsAuthFalse } = useAuthStore();

	const { mutate: logout } = useMutation({
		mutationKey: ["logout"],
		mutationFn: () => authorizationService.logout(),
		onSuccess: () => {
			toast("Вы вышли из профиля!");
			setIsAdminFalse();
			setIsAuthFalse();
			push(DASHBOARD_PAGES.HOME);
			// location.reload();
		},
	});

	return { logout, isAdmin, isAuth };
};
