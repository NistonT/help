import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import mainImage from "@public/Image/3.jpg";
import support from "@public/Image/6.png";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Main = () => {
	return (
		<div className='relative w-screen h-screen'>
			<Image
				src={mainImage}
				alt='Main'
				fill
				className='object-cover'
				priority
				sizes='100vw'
			/>

			<div className='group'>
				<Link
					href={DASHBOARD_PAGES.AUTHORIZATION}
					className='absolute bottom-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               flex flex-col items-center gap-2 z-20 
               px-4 py-3 rounded-md 
               text-gray-200 font-medium 
                
               cursor-pointer'
				>
					<div>
						<Image src={support} alt='Support Button' width={72} height={72} />
					</div>
					<p
						className='text-white text-2xl font-semibold 
                 duration-300 
               group-hover:bg-yellow-500 
               group-hover:text-black/75 transition-colors'
					>
						Подать заявку в техподдержку
					</p>
					<Send className='w-6 h-6 group-hover:text-black/75 duration-300' />
				</Link>

				<div className='h-1/8 bg-black/75 w-full absolute bottom-1/5 group-hover:bg-yellow-500 transition-colors duration-300' />
			</div>
		</div>
	);
};
