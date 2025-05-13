import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { authorizationService } from "@/service/auth.service";
import { IRegistrationForm, IRegistrationRequest } from "@/type/auth.type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export const useRegistration = (data: IRegistrationForm) => {
	const { push } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ["register_user"],
		mutationFn: (register_data: IRegistrationRequest) =>
			authorizationService.registrationRegisterMain(register_data),
		onSuccess: response => {
			toast.success("Вы успешно создали профиль!");
			push(DASHBOARD_PAGES.AUTHORIZATION);
		},
		onError: error => {
			toast.error(error.message);
		},
	});

	const handlerSubmit: SubmitHandler<IRegistrationForm> = data => {
		const { confirm_password, isConfirm, ...register_data } = data;

		if (confirm_password != register_data.password) {
			toast.error("Пароли не сходятся");
			return;
		}

		if (!isConfirm) {
			toast.error("Вы не подтвердили пользоваское соглашение");
		}

		mutate(register_data);
	};

	return { handlerSubmit };
};
