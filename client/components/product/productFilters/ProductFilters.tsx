import Header from "@/components/header/Header";
import React from "react";
import CategoryList from "./categoryList/CategoryList";
import { Category } from "@/types/Category";
import { getCategories } from "@/api/category";

const ProductFilters = async () => {
	const categories: Category[] = await getCategories();

	return (
		<div className="flex flex-col gap-3 w-full">
			<div className="w-full">
				<Header
					className="text-2xl font-semibold"
					showSeparator={true}
					title="Filter"
				/>
			</div>
			<CategoryList categories={categories} />
		</div>
	);
};

export default ProductFilters;
