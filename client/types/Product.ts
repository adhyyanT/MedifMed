export type PaginatedProducts = {
	products: Product[];
	totalPages: number;
};
export type Product = {
	productId: string;
	name: string;
	description: string;
	avgRating: number;
	smallestUnit: string;
	price: number;
	img: string;
};
