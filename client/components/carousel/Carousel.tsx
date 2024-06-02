"use client";

import { Category } from "@/types/Category";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import styles from "./carousel.module.css";

interface ICarouselProp {
	data: Category[];
}

const Carousel = ({ data }: ICarouselProp) => {
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const scroll = (scrollOffset: number) => {
		if (scrollRef.current)
			scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
	};
	return (
		<div className="relative">
			<div className=" z-10 hidden md:flex md:absolute rounded-lg top-[40%] shadow-md left-[2px] bg-white">
				<Button
					onClick={() => scroll(-200)}
					className="text-xl bg-[var(--foreground)] hover:bg-[var(--foreground)]"
				>
					<CaretLeftIcon className="text-white w-5 h-5" />
				</Button>
			</div>
			<div
				ref={scrollRef}
				className={` md:relative flex overflow-x-auto gap-4 py-6 px-10 ${styles.hideScroll}`}
			>
				{data.map((d, _) => (
					<div key={d.categoryId} className="flex flex-col">
						<Card className="basis-1/4 min-w-[200px] min-h-[200px]">
							<CardContent className="flex aspect-square items-center justify-center p-6">
								<Link href={"/products"}>
									<Image
										className="w-full h-auto"
										src={d.categoryImage}
										alt="image"
										height={150}
										width={150}
									/>
								</Link>
							</CardContent>
						</Card>
						<div className="flex justify-center">{d.name}</div>
					</div>
				))}
			</div>
			<div className="right-1 z-10 hidden md:flex md:absolute rounded-lg top-[40%] shadow-md  bg-white">
				<Button
					onClick={() => scroll(200)}
					className="text-xl bg-[var(--foreground)] hover:bg-[var(--foreground)] "
				>
					<CaretRightIcon className="text-white w-5 h-5" />
				</Button>
			</div>
		</div>
	);
};

export default Carousel;
