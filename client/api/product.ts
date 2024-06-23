import { PaginatedProducts, Product } from "@/types/Product";
import { ProductDetail } from "@/types/ProductDetail";
import { ProductImage } from "@/types/ProductImage";
import { Response } from "@/types/Response";

const productEndPoint = process.env.NEXT_PUBLIC_PRODUCT_ENDPOINT!;
const productDetailEndpoint = process.env.NEXT_PUBLIC_PRODUCT_DETAILS_ENDPOINT!;
const productImageEndPoint = process.env.NEXT_PUBLIC_PRODUCT_IMAGE_ENDPOINT!;

export const getPaginatedProducts = async (
	page: number = 1,
	sort: number = 6,
	categoryId?: string
) => {
	try {
		let url = `${productEndPoint}?page=${page}&sort=${sort}`;
		if (categoryId) url += `&categoryId=${categoryId}`;
		const res = await fetch(url, { cache: "force-cache" });
		const resJson = await res.json();
		return { data: resJson, status: 200 } as Response<PaginatedProducts>;
	} catch (error) {
		console.log(error);
		return { data: null, status: 400 } satisfies Response<null>;
	}
};

export const getProduct = async (id: string) => {
	try {
		let url = `${productEndPoint}/product/${id}`;
		const res = await fetch(url, { cache: "force-cache" });
		const resJson = await res.json();
		return {
			data: resJson.data as Product,
			status: res.status,
		} satisfies Response<Product>;
	} catch (error) {
		console.log(error);
		return { data: null, status: 400 };
	}
};

export const getProductDetails = async (productId: string) => {
	try {
		const url = `${productDetailEndpoint}/${productId}`;
		const res = await fetch(url, { cache: "force-cache" });
		const resJson = await res.json();
		return {
			data: resJson as ProductDetail[],
			status: res.status,
		} satisfies Response<ProductDetail[]>;
	} catch (error) {
		console.log(error);
		return { data: null, status: 400 } satisfies Response<null>;
	}
};
export const getProductImages = async (id: string) => {
	try {
		const url = `${productImageEndPoint}/${id}`;
		const res = await fetch(url, { cache: "force-cache" });
		const resJson = await res.json();
		return {
			data: resJson as ProductImage[],
			status: res.status,
		} satisfies Response<ProductImage[]>;
	} catch (error) {
		console.log(error);

		return { data: null, status: 400 } satisfies Response<null>;
	}
};
