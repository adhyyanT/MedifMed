"use client";
import Header from "@/components/header/Header";
import { Category } from "@/types/Category";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect } from "react";
import { FieldValue, useForm } from "react-hook-form";

type CategoryProp = {
	categories: Category[];
};

const CategoryList = ({ categories }: CategoryProp) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const current = new URLSearchParams(
			Array.from(searchParams?.entries() ?? [])
		);

		const value = event.target.value.trim();

		if (!value) {
			current.delete("categoryId");
		} else {
			current.set("categoryId", event.target.value);
		}

		const search = current.toString();

		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<{ filter: string }>();

	const onSubmit = (data: FieldValue<{ filter: string }>) => console.log(data);

	useEffect(() => {
		const filterVal = searchParams?.get("categoryId");
		if (filterVal) {
			setValue("filter", filterVal);
		}
	}, []);

	return (
		<div className="flex flex-col gap-3 pt-6">
			<Header
				showSeparator={false}
				className="text-xl font-semibold"
				title="Category"
			/>
			<form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
				{categories.map((category, index) => (
					<div
						key={category.categoryId}
						className="flex justify-between items-center space-x-2"
					>
						<label htmlFor={category.name}>{category.name}</label>
						<input
							className="accent-[var(--accent-foreground)]"
							{...register("filter", {
								onChange: handleInputChange,
							})}
							value={category.categoryId}
							id={category.name}
							type="radio"
						/>
					</div>
				))}
			</form>
		</div>
	);
};

export default CategoryList;
