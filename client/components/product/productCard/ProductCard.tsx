"use client";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../../ui/card";
import styles from "./productCard.module.css";

type ProductCardProps = {
	product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
	const ratingDecimal = (product.avgRating * 10) % 10;
	if (ratingDecimal > 0) {
		product.avgRating =
			ratingDecimal <= 5
				? (Math.floor(product.avgRating) % 10) + 0.5
				: Math.floor(product.avgRating) + 1;
	}

	return (
		<>
			<Link className={styles.card} href={`products/${product.productId}`}>
				<Card className="h-full flex flex-col gap-2">
					<CardContent className="flex-grow pb-0">
						<Image
							className="w-auto h-auto"
							src={product.img}
							alt={product.name}
							width={200}
							height={200}
						/>
						<div
							className={`capitalize font-montserrat line-clamp-3 font-medium ${styles.title}`}
						>
							{product.name}
						</div>
					</CardContent>
					<CardFooter className="flex px-6  items-start flex-col">
						<div className="flex ">
							{product.avgRating > 0 &&
								Array.from(Array(Math.floor(product.avgRating))).map(
									(val, index) => (
										<Image
											key={index}
											alt="full-star"
											src={"/star-full.png"}
											width={25}
											height={25}
										/>
									)
								)}
							{product.avgRating > 0 && (product.avgRating * 10) % 10 > 0 && (
								<Image
									alt="half-star"
									src={"/rating.png"}
									width={25}
									height={25}
								/>
							)}
							{Array.from(
								Array(
									5 -
										Math.floor(product.avgRating) -
										((product.avgRating * 10) % 10 > 0 ? 1 : 0)
								)
							).map((val, index) => {
								return (
									<Image
										key={index}
										alt="no-star"
										src={"/star.png"}
										height={25}
										width={25}
									/>
								);
							})}
						</div>
						<div className="flex text-xl items-center gap-1">
							<p className={`font-medium ${styles.title}`}>₹{product.price}</p>
							<p className="text-sm">/{product.smallestUnit}</p>
						</div>
					</CardFooter>
				</Card>
			</Link>
		</>
	);
};
export default ProductCard;
