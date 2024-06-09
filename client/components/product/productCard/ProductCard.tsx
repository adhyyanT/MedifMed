import { Product } from "@/types/Product";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../../ui/card";
import Link from "next/link";
import styles from "./productCard.module.css";

type ProductCardProps = {
	product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<Link className={styles.card} href={`products/${product.productId}`}>
				<Card className="h-full flex flex-col">
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
						<div>rating:{product.avgRating}</div>
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
