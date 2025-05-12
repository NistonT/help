"use client";
import { headerLinksConstants } from "@/constants/header-links.constants";
import { useAuthStore } from "@/store/auth.store";
import logo from "@public/Image/logo.png";
import Image from "next/image";
import { HeaderButtonLink } from "./HeaderButtonLink";

export const Header = () => {
	const {
		isAdmin,
		isAuth,
		setIsAdminFalse,
		setIsAuthFalse,
		setIsAdminTrue,
		setIsAuthTrue,
	} = useAuthStore();

	return (
		<header className='backdrop-opacity-80 backdrop-blur-sm bg-black/75 top-0 z-50 w-full px-20 transition-colors duration-300 fixed shadow-2xl shadow-gray-600 flex justify-between items-center'>
			<div className='flex items-center space-x-3'>
				<Image src={logo} alt='Logo' width={72} height={72} />
				<span
					className='text-white text-4xl font-extrabold italic drop-shadow-md 
              inline-block cursor-default text-shadow-2xs hover:text-shadow-cyan-300 duration-300 select-none'
				>
					Help!!!
				</span>
			</div>
			{!isAuth && (
				<div className='flex relative'>
					{headerLinksConstants.map(link => (
						<HeaderButtonLink key={link.name} link={link} />
					))}
				</div>
			)}
		</header>
	);
};
