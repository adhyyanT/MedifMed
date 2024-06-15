"use client";
import styles from "./productFilterButton.module.css";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Category } from "@/types/Category";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useForm } from "react-hook-form";

type ProductFilterButtonProp = {
	btnLabel: string;
	title: string;
	description: string;
	closeLabel: string;
	icon: ReactNode;
	param: string;
	filterList: Category[];
	className?: string;
};

const ProductFilterButton = ({
	btnLabel,
	title,
	description,
	closeLabel,
	icon,
	param,
	filterList,
	className,
}: ProductFilterButtonProp) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<{ filter: string }>();

	const onSubmit = (event: { filter: string }) => {
		const current = new URLSearchParams(
			Array.from(searchParams?.entries() ?? [])
		);

		const value = event.filter;

		if (!value) {
			current.delete(param);
		} else {
			current.set(param, event.filter);
		}

		const search = current.toString();

		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	};
	useEffect(() => {
		const val = searchParams?.get(param);
		if (val) setValue("filter", val);
	}, [searchParams]);
	return (
		<Drawer>
			<DrawerTrigger
				className={`${styles.button} h-11 text-lg ${styles.left} ${className}`}
			>
				<div className="flex gap-3 items-center justify-center">
					{icon} {btnLabel}
				</div>
			</DrawerTrigger>
			<DrawerContent className="bg-white ">
				<DrawerHeader>
					<DrawerTitle>{title}</DrawerTitle>
					<DrawerDescription>{description}</DrawerDescription>
				</DrawerHeader>
				<form
					className="px-8 flex flex-col gap-3"
					onSubmit={handleSubmit(onSubmit)}
				>
					{filterList.map((category, index) => (
						<div
							key={category.categoryId}
							className="flex justify-between items-center space-x-2"
						>
							<label htmlFor={category.categoryId}>{category.name}</label>
							<input
								className="accent-[var(--accent-foreground)]"
								{...register("filter")}
								value={category.categoryId}
								id={category.categoryId}
								type="radio"
							/>
						</div>
					))}

					<DrawerFooter>
						<DrawerClose type="submit">{closeLabel}</DrawerClose>
					</DrawerFooter>
				</form>
			</DrawerContent>
		</Drawer>
	);
};

export default ProductFilterButton;
