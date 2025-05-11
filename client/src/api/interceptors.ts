import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};

// Без проверки на авторизацию
const axiosClassic = axios.create(options);

// Проверка на авторизацию
const axiosWithAuto = axios.create(options);
