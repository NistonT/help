import mainImage from "@public/Image/3.jpg";
import Image from "next/image";

export const Main = () => {
	return (
		<div>
			<Image src={mainImage} alt={"image"} className='w-full' />
		</div>
	);
};
