import React from "react";
import styles from "./hero.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const TRUST_CERTIFICATE =
	"https://trustseal.indiamart.com/members/medif-medical-bhopal";

const Hero = () => {
	return (
		<div className="flex flex-col gap-14 justify-start pt-32 w-full bg-[var(--hero)] items-center">
			<div>
				<p className={` ${styles.heroFont}`}>What are you looking for?</p>
			</div>
			<div
				className={`${styles.form} flex max-w-sm md:max-w-none md:w-[40%] items-center space-x-2`}
			>
				{/* Implement scroll fade away text animation */}
				<Input
					className="border-none shadow-none"
					type="text"
					placeholder="Search for products"
				/>
				<Button
					className="p-5 text-[var(--primary-foreground)] border-none shadow-none hover:bg-[var(--accent-foreground)] bg-[var(--accent-foreground)] rounded-[50px]"
					type="submit"
				>
					Search
				</Button>
			</div>
			<div className="flex flex-col md:flex-row gap-8 md:gap-60 items-center font-family: Montserrat, sans-serif font-medium text-[#3f4144]">
				<a
					href={TRUST_CERTIFICATE}
					target="_blank"
					className="pt-[11px] flex flex-col gap-8 items-center"
				>
					<Image
						src={"/guarantee-award-icon.png"}
						alt="certified"
						height={70}
						width={70}
					></Image>
					<p>IndiaMART Trust Seal Verified</p>
				</a>
				<a
					href={TRUST_CERTIFICATE}
					target="_blank"
					className="flex flex-col gap-7 items-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						height="100"
						viewBox="0 0 100 100"
						fill="none"
						stroke="#3390c4"
						stroke-width="12"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="83 20 38 70 17 50"></polyline>
					</svg>
					<p>IndiaMART Verified Exporter</p>
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
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path>
					</svg>
				</Button>
			</div>
		</div>
	);
};

export default Hero;
