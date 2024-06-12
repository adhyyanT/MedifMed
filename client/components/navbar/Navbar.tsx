"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navlink from "./navlink/Navlink";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const navLinks: NavlinkProps[] = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Signin",
		href: "/login",
	},
];

const Navbar = () => {
	const path = usePathname();

	const scrollPosition = useScrollPosition();
	return (
		// <div
		// 	className={`z-20 sticky top-0 p-3 items-center flex justify-between lg:gap-40  pl-8 pr-8 md:justify-around ${
		// 		scrollPosition > 0 || path !== "/"
		// 			? styles.scrollBottom
		// 			: styles.scrollTop
		// 	}`}
		// >
		<div className="relative flex justify-center w-full">
			<div
				className={`${styles.glassNav} md:w-[80%] w-[95%] m-4 z-20 fixed top-0 p-3 items-center flex justify-between lg:gap-40  px-8  
			`}
			>
				<div className="flex items-center w-40 justify-start gap-2 md:justify-between">
					<div className="flex justify-center">
						<Link href={"/"} className="md:block hover:cursor-pointer">
							<Image
								priority={true}
								className="hover:cursor-pointer h-auto w-auto"
								src={"/medif-medical-no-bg.png"}
								alt={"Logo"}
								width={40}
								height={40}
							/>
						</Link>
					</div>
					<Link
						href={"/"}
						className="hidden md:block hover:cursor-pointer"
						style={{ borderLeft: "2px solid grey", height: "40px" }}
					></Link>
					<Link href={"/"} className="">
						MedifMed
					</Link>
				</div>

				<Navlink navLinks={navLinks} />
			</div>
		</div>
	);
};

export default Navbar;
