import React from "react";
import ProductFilterButton from "../productFilterButton/ProductFilterButton";
import { MixerHorizontalIcon, CaretSortIcon } from "@radix-ui/react-icons";
import { getCategories } from "@/api/category";

import styles from "./productFilterRow.module.css";
const ProductFilterRow = async () => {
	const categories = await getCategories();
	return (
		<div className="flex justify-center w-full">
			<ProductFilterButton
				className={styles.buttonLeft}
				btnLabel="Category"
				closeLabel="Apply"
				description="Filter products by category"
				title="Category"
				icon={<MixerHorizontalIcon />}
				filterList={categories}
				param="categoryId"
			/>
			<ProductFilterButton
				className={styles.buttonRight}
				btnLabel="Sort"
				closeLabel="Apply"
				description="Sort products by..."
				title="Sort"
				icon={<CaretSortIcon />}
				filterList={categories}
				param="sort"
			/>
		</div>
	);
};

export default ProductFilterRow;
