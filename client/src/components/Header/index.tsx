"use client";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import logo from "@public/Image/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<header className='backdrop-opacity-80 backdrop-blur-sm bg-black/75 top-0 z-50 w-full px-20 transition-colors duration-300 fixed shadow-2xl shadow-gray-600 flex justify-between items-center'>
			<div className='flex items-center space-x-3'>
				<Image src={logo} alt='Logo' width={64} height={64} />
				<span
					className='text-white text-4xl font-extrabold italic drop-shadow-md 
              inline-block cursor-default text-shadow-2xs hover:text-shadow-cyan-300 duration-300 select-none'
				>
					Help!!!
				</span>
			</div>
			<div className='flex gap-4 text-gray-200 font-medium'>
				<Link href={DASHBOARD_PAGES.AUTHORIZATION}>Авторизация</Link>
				<Link href={DASHBOARD_PAGES.REGISTRATION}>Регистрация</Link>
			</div>
		</header>
	);
};
