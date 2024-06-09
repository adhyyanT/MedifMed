"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/types/Category";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	description: z.string(),
	price: z.string(),
	smallestUnit: z.string(),
	img: z.string(),
	categories: z.array(z.string()),
});
const getCategories = async () => {
	const resp = await fetch("http://localhost:5179/api/category/categories");
	return resp.json();

	// return t as Category[];
};
let val = "";
const ProductCreateForm = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	useEffect(() => {
		const id = setTimeout(() => {
			const getCat = async () => {
				const res: Category[] = await getCategories();
				setCategories((prevState) => {
					console.log(res);
					return res as Category[];
				});
			};
			// getCategories().then((res) => setCategories(res));
			getCat();
		});

		return () => {
			clearTimeout(id);
		};
	}, []);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			categories: [],
			description: "",
			img: "",
			name: "",
			price: "",
			smallestUnit: "",
		},
	});
	function jsonEscapeRev(str: string) {
		return str.replace("\\n", "\n").replace("\\r", "\r").replace("\\t", "\t");
	}
	function jsonEscape(str: string) {
		return str
			.replace(/\n/g, "\\\n")
			.replace(/\r/g, "\\\r")
			.replace(/\t/g, "\\\t");
	}
	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// values.description = encodeURIComponent(values.description);
		const res = await fetch("http://localhost:5179/api/products/product", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});
		console.log(values);
		const t = await res.json();
		val = (t as Product).description;
		toast({
			description: "Product Created",
		});
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 flex flex-col justify-center w-[1024px] mx-auto"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Desc</FormLabel>
							<FormControl>
								{/* <Input placeholder="shadcn" {...field} /> */}
								<Textarea {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="img"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Img</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Price</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="smallestUnit"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Unit</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="categories"
					render={({ field }) => (
						<FormItem>
							<FormLabel>cat</FormLabel>
							<FormControl>
								<div>
									{categories.map((c) => (
										<React.Fragment key={c.categoryId}>
											<div className="flex gap-3 items-center">
												<Checkbox
													onCheckedChange={(event) => {
														if (event) {
															field.onChange([c.categoryId, ...field.value]);
														} else {
															field.onChange(
																form
																	.getValues()
																	.categories.filter(
																		(ct) => ct !== c.categoryId
																	)
															);
														}
													}}
												/>
												<div>{c.name}</div>
											</div>
										</React.Fragment>
									))}
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default ProductCreateForm;
