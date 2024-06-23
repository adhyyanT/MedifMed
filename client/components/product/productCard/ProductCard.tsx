"use client";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../../ui/card";
import styles from "./productCard.module.css";
import Rating from "../rating/Rating";

type ProductCardProps = {
	product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<Link
				className={styles.card}
				href={{ pathname: `products/${product.productId}` }}
			>
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
					<CardFooter className="flex px-6 gap-3 items-start flex-col">
						<Rating rating={product.avgRating} />
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
