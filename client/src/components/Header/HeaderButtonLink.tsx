import { IHeaderLinksConstants } from "@/constants/header-links.constants";
import Link from "next/link";

type Props = {
	link: IHeaderLinksConstants;
};

export const HeaderButtonLink = ({ link }: Props) => {
	return (
		<div
			key={link.name}
			className='flex items-center gap-1 text-gray-200 font-medium duration-300 hover:bg-yellow-500 h-18 hover:text-black/75 relative px-2'
		>
			<Link href={link.link}>{link.name}</Link>
			<link.icon />
		</div>
	);
};
