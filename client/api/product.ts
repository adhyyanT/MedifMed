import { Product } from "@/types/Product";
import axios from "axios";

const productEndPoint = process.env.NEXT_PUBLIC_PRODUCT_ENDPOINT!;

export const getProducts = async () => {
	const url = productEndPoint;
	const res = await axios.get(url);
	return res.data as Product[];
};
