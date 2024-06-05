"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navlink from "./navlink/Navlink";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import styles from "./navbar.module.css";

const navLinks: NavlinkProps[] = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Login",
		href: "/login",
	},
];

const Navbar = () => {
	const scrollPosition = useScrollPosition();
	return (
		<div
			className={`sticky top-0 p-3 items-center flex justify-between lg:gap-40  pl-8 pr-8 md:justify-around ${
				scrollPosition > 0 ? styles.scrollBottom : styles.scrollTop
			}`}
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
	);
};

export default Navbar;
