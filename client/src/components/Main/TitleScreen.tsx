"use client";

import { fadeIn } from "@/constants/motion-settings.constants";
import mainImage from "@public/Image/3.jpg";
import { MessageCircle } from "lucide-react";
import { m } from "motion/react";
import Image from "next/image";

export const TitleScreen = () => {
	return (
		<>
			<m.div
				{...fadeIn}
				className='flex flex-col md:flex-row w-full bg-white rounded-xl overflow-hidden transition-transform h-96 mt-18'
			>
				<div className='md:w-1/2 w-full relative h-full md:h-auto'>
					<Image
						src={mainImage}
						alt='Основное изображение'
						layout='fill'
						objectFit='cover'
						className='transition-transform duration-300 hover:scale-105'
					/>
				</div>
				<div className='md:w-1/2 p-6 md:p-8 flex items-center justify-center'>
					<div className='text-center max-w-md'>
						<div className='flex items-center justify-center gap-3 mb-4'>
							<MessageCircle className='w-6 h-6' />
							<h3 className='text-lg font-semibold'>
								Подать заявку в техподдержку
							</h3>
						</div>
						<p className='text-gray-600 mb-6'>
							Заполните форму или свяжитесь с нами напрямую. Мы всегда на связи
							и готовы помочь.
						</p>
						<button className='bg-black text-white py-2 px-6 rounded-lg transition-colors'>
							Открыть форму
						</button>
					</div>
				</div>
			</m.div>
		</>
	);
};
