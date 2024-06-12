import React from "react";
import { Separator } from "../ui/separator";

type IHeaderProp = {
	title: string;
	showSeparator: boolean;
	className?: string;
};
const Header = ({ title, showSeparator, className }: IHeaderProp) => {
	return (
		<div
			className={`w-full font-[var(--font)] text-[var(--text-color)] text-xl ${className}`}
		>
			<div className="flex flex-col gap-3">
				<div className={className}>{title}</div>
				{showSeparator && <Separator className="bg-[var(--text-color)]" />}
			</div>
		</div>
	);
};

export default Header;
