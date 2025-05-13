"use client";

import { fadeIn } from "@/constants/motion-settings.constants";
import logo from "@public/Image/logo.png";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import { m } from "motion/react";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer className='backdrop-blur-sm backdrop-opacity-80 bg-black/80 text-white py-12 px-6 md:px-20 shadow-2xl shadow-gray-900/30'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
				<m.div {...fadeIn} className='flex flex-col items-start space-y-4'>
					<div className='flex items-center space-x-3'>
						<Image src={logo} alt='Logo' width={60} height={60} />
						<span
							className='text-white text-4xl font-extrabold italic drop-shadow-md 
              inline-block cursor-default text-shadow-2xs hover:text-shadow-cyan-300 duration-300 select-none'
						>
							Help!!!
						</span>
					</div>
					<p className='text-gray-300 max-w-xs'>
						Мы всегда на связи и готовы помочь вам с любой задачей.
					</p>
				</m.div>

				<m.div {...fadeIn} className='flex flex-col space-y-4'>
					<h4 className='text-xl font-semibold text-white'>Контакты</h4>
					<div className='flex items-center space-x-2 text-gray-300'>
						<Mail className='w-5 h-5 text-gray-400' />
						<span>support@helpservice.com</span>
					</div>
					<div className='flex items-center space-x-2 text-gray-300'>
						<Phone className='w-5 h-5 text-gray-400' />
						<span>+7 (999) 123-45-67</span>
					</div>
				</m.div>

				<m.div {...fadeIn} className='flex flex-col space-y-4'>
					<h4 className='text-xl font-semibold text-white'>Мы в соцсетях</h4>
					<div className='flex space-x-4'>
						<a
							href='#'
							className='text-gray-300 hover:text-blue-500 transition-colors'
						>
							<Facebook className='w-6 h-6' />
						</a>
						<a
							href='#'
							className='text-gray-300 hover:text-blue-400 transition-colors'
						>
							<Twitter className='w-6 h-6' />
						</a>
						<a
							href='#'
							className='text-gray-300 hover:text-pink-500 transition-colors'
						>
							<Instagram className='w-6 h-6' />
						</a>
					</div>
				</m.div>
			</div>

			<m.div
				{...fadeIn}
				className='mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400'
			>
				&copy; {new Date().getFullYear()} Help!!! — Все права защищены.
			</m.div>
		</footer>
	);
};
