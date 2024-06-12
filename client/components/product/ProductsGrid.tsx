import React from "react";
import Header from "../header/Header";
import { getProducts } from "@/api/product";
import ProductCard from "./productCard/ProductCard";

const ProductsGrid = async () => {
	const products = await getProducts();
	return (
		<div className="flex flex-col gap-3">
			<Header className="text-3xl" title="Products" showSeparator={false} />
			<div className="grid grid-cols-2 auto-rows-[1fr] md:grid-cols-3 gap-3">
				{products.map((d, index) => (
					<ProductCard key={index} product={d} />
				))}
			</div>
		</div>
	);
};

export default ProductsGrid;
