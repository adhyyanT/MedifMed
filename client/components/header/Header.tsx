import React from "react";
import { Separator } from "../ui/separator";

type IHeaderProp = {
	title: string;
};
const Header = ({ title }: IHeaderProp) => {
	return (
		<div className="w-full font-[var(--font)] text-[var(--text-color)] text-xl">
			<div className="flex flex-col gap-3">
				<h2>{title}</h2>
				<Separator className="bg-[var(--text-color)]" />
			</div>
		</div>
	);
};

export default Header;
