import React from "react";
import styles from "./hero.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const TRUST_CERTIFICATE =
	"https://trustseal.indiamart.com/members/medif-medical-bhopal";

const Hero = () => {
	return (
		// <div className="flex flex-col min-h-[calc(100vh-0.75rem-0.75rem-40px)] gap-10 pt-12 lg:gap-20 lg:pt-20 xl:gap-24  xl:pt-24 justify-start w-full bg-[var(--hero)] items-center">
		<div className="pt-[calc(1rem+1rem+0.75rem+0.75rem+40px)] md:pt-nav-padding flex flex-col h-screen gap-10 lg:gap-20 xl:gap-24 justify-start  bg-[var(--hero)] items-center">
			<div className="w-[90%]">
				<p className={` ${styles.heroFont}  font-montserrat text-center`}>
					Medical equipments at your finger tips
				</p>
			</div>
			{/* <div className={`${styles.container}`}>
				<div className={styles.searchContainer}>
					<input className={styles.input} type="text" />
					<svg viewBox="0 0 24 24" className={styles.search__icon}>
						<g>
							<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
						</g>
					</svg>
				</div>
			</div> */}
			<div
				className={`${styles.form} flex justify-between max-w-sm md:max-w-none md:w-[40%] items-center space-x-2`}
			>
				<Input
					className={`${styles.text} border-none shadow-none`}
					type="text"
					placeholder="Search for products..."
				/>

				<Button
					className="p-5 text-[var(--primary-foreground)] border-none shadow-none hover:bg-[var(--accent-foreground)] bg-[var(--accent-foreground)] rounded-[50px]"
					type="submit"
				>
					Search
				</Button>
			</div>
			<div className="flex flex-col md:flex-row gap-8 md:gap-60 items-center">
				<a
					href={TRUST_CERTIFICATE}
					target="_blank"
					className="pt-[11px] flex flex-col gap-8 items-center"
				>
					<Image
						className="hover:cursor-pointer h-auto w-auto"
						src={"/guarantee-award-icon.png"}
						alt="certified"
						height={70}
						width={70}
					></Image>
					<p className="font-medium text-[#3f4144]">
						IndiaMART Trust Seal Verified
					</p>
				</a>
				<a
					href={TRUST_CERTIFICATE}
					target="_blank"
					className="flex flex-col gap-0 lg:gap-7 items-center "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						height="100"
						viewBox="0 0 100 100"
						fill="none"
						stroke="#3390c4"
						strokeWidth="12"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="h-[135px] w-[135px]"
					>
						<polyline points="83 20 38 70 17 50"></polyline>
					</svg>
					<p className="font-medium text-[#3f4144]">
						IndiaMART Verified Exporter
					</p>
				</a>
			</div>
			<div>
				<Button className="shadow-none h-[115px] w-[115px]">
					<svg
						className="text-[#3f4144]"
						width="115"
						height="115"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
				</Button>
			</div>
		</div>
	);
};

export default Hero;
