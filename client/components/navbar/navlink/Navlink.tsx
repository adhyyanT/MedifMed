import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

type navLinkProp = {
	navLinks: NavlinkProps[];
};

const Navlink = ({ navLinks }: navLinkProp) => {
	return (
		<div className="flex gap-6 items-center">
			{navLinks.map((link, index) =>
				link.href === "/login" ? (
					<Button
						key={index}
						variant={"outline"}
						className="border-black"
						asChild
					>
						<Link href={link.href}>{link.name} </Link>
					</Button>
				) : (
					<Button key={index} variant={"link"}>
						<Link href={link.href}>{link.name} </Link>
					</Button>
				)
			)}
		</div>
	);
};

export default Navlink;
