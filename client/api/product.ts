import { PaginatedProducts, Product } from "@/types/Product";
import axios from "axios";

const productEndPoint = process.env.NEXT_PUBLIC_PRODUCT_ENDPOINT!;

export const getPaginatedProducts = async (
	page: number = 1,
	sort: number = 6,
	categoryId?: string
) => {
	let url = `${productEndPoint}?page=${page}&sort=${sort}`;
	if (categoryId) url += `&categoryId=${categoryId}`;
	const res = await fetch(url, { cache: "force-cache" });
	const resJson = await res.json();
	return resJson as PaginatedProducts;
};
