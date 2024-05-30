import React from "react";
import { Card, CardContent } from "../ui/card";
import { Category } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";

interface ICarouselProp {
	data: Category[];
}

const Carousel = ({ data }: ICarouselProp) => {
	return (
		<div className="flex overflow-x-auto gap-4 p-6">
			{data.map((d, _) => (
				<Card key={_} className="basis-1/3 min-w-[150px] min-h-[150px]">
					<CardContent className="flex aspect-square items-center justify-center p-6">
						{/* <span className="text-3xl font-semibold"></span> */}
						<Link href={"/products"}>
							<Image
								src={d.categoryImage}
								alt="image"
								height={120}
								width={120}
							/>
						</Link>
					</CardContent>
				</Card>
			))}

			{/* <Card className="basis-1/4">
				<CardContent className="flex aspect-square items-center justify-center p-6">
					<span className="text-3xl font-semibold">1</span>
				</CardContent>
			</Card> */}
		</div>
	);
};

export default Carousel;
