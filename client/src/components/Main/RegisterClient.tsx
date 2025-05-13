"use client";
import { fadeIn } from "@/constants/motion-settings.constants";
import image from "@public/Image/4.png";
import bg from "@public/Image/7.png";
import { AlertCircle } from "lucide-react";
import { m } from "motion/react";
import Image from "next/image";

export const RegisterClient = () => {
	return (
		<>
			<div className='relative bg-gray-700 w-full h-64 md:h-96 overflow-hidden'>
				<Image
					src={bg}
					alt='background'
					layout='fill'
					objectFit='cover'
					className='absolute inset-0 blur-md'
				/>

				<m.div
					{...fadeIn}
					className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col md:flex-row items-center justify-center gap-6 p-6 
        bg-black/50 backdrop-blur-sm max-w-3xl mx-auto text-center md:text-left'
				>
					<div className='max-w-md space-y-3'>
						<div className='flex items-center justify-center md:justify-start mb-2 text-white'>
							<AlertCircle className='w-6 h-6 mr-2' />
							<h3 className='text-xl font-semibold'>Регистрация сотрудника</h3>
						</div>
						<p className='leading-relaxed text-white ml-8'>
							Перед тем как впервые воспользоваться услугами сервиса сотрудник
							должен зарегистрироваться.
						</p>
					</div>

					<div className='flex-shrink-0'>
						<Image
							src={image}
							alt='main image'
							width={400}
							height={400}
							className='transition-transform hover:scale-125 duration-300'
						/>
					</div>
				</m.div>
			</div>
		</>
	);
};
