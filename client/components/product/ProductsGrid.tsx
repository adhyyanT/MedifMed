"use client";
import { getPaginatedProducts } from "@/api/product";
import { Product } from "@/types/Product";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import { Skeleton } from "../ui/skeleton";
import ProductPagination from "./pagination/ProductPagination";
import ProductCard from "./productCard/ProductCard";

const ProductsGrid = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [totalPage, setTotalPage] = useState(1);
	const [currPage, setCurrPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const searchParams = useSearchParams();

	useEffect(() => {
		setIsLoading(true);
		const id = setTimeout(() => {
			(async function () {
				const currPage = searchParams?.get("page");
				const categoryId = searchParams?.get("categoryId");
				const products = await getPaginatedProducts(
					currPage ? parseInt(currPage) : 1,
					undefined,
					categoryId === null ? undefined : categoryId
				);
				setProducts(products.products);
				setTotalPage(products.totalPages);
				setCurrPage(parseInt(currPage ? currPage : "1"));
				setIsLoading(false);
			})();
		});
		return () => {
			clearTimeout(id);
		};
	}, [searchParams]);

	return (
		<div className="flex flex-col gap-3">
			<Header
				className="text-3xl font-semibold"
				title="Products"
				showSeparator={false}
			/>
			<div className="flex flex-col gap-14">
				<div className="grid grid-cols-2 auto-rows-[1fr] md:grid-cols-3 gap-3">
					{!isLoading &&
						products?.map((d, index) => (
							<ProductCard key={index} product={d} />
						))}
					{isLoading &&
						Array.from(Array(12)).map((data, index) => {
							return (
								<div
									key={index}
									className="flex max-w-[200px] flex-col space-y-3"
								>
									<Skeleton className="bg-[#efefef] h-[200px] w-[200px] rounded-xl" />
									<div className="space-y-2">
										<Skeleton className="bg-[#efefef] h-4 w-[200px]" />
										<Skeleton className="bg-[#efefef] h-4 w-[150px]" />
									</div>
								</div>
							);
						})}
				</div>
				<ProductPagination totalPage={totalPage} currPage={currPage} />
			</div>
		</div>
	);
};

export default ProductsGrid;
