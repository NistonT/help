interface IErrorCatch {
	response: {
		data: {
			message: string;
		};
	};
}

export const errorCatch = (error: IErrorCatch | any) => {
	const message = error?.response?.data.message;

	return message
		? typeof error.response.data.message === "object"
			? message[0]
			: message
		: error?.message;
};
