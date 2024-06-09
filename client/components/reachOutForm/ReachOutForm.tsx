"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";
import styles from "./reachOutForm.module.css";
import { useToast } from "../ui/use-toast";
import { reachOutFormSchema } from "@/types/UserReachOutForm";

type ReachOutFormProp = {
	title: string;
};

const ReachOutForm = ({ title }: ReachOutFormProp) => {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof reachOutFormSchema>>({
		resolver: zodResolver(reachOutFormSchema),
		defaultValues: {
			email: "",
			firstName: "",
			lastName: "",
			message: "",
			phoneNumber: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof reachOutFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		toast({
			description: "Your message has been sent.",
			variant: "default",
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={`space-y-8  ${styles.form}`}
			>
				<div className="flex justify-center">
					<p className="font-family: Montserrat, font-medium sans-serif text-[#515254] text-center text-[1.3rem]">
						{title}
					</p>
				</div>
				<div className="md:flex md:gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input placeholder="John" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="Doe" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="example@email.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Contact</FormLabel>
							<FormControl>
								<Input type="tel" placeholder="9876543210" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea placeholder="Your query goes here..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className=" w-full bg-[var(--accent-foreground)] text-[var(--background)]"
					type="submit"
					variant={"outline"}
					onClick={() => {
						return toast({
							title: "Uh oh! Something went wrong.",
							description: "There was a problem with your request.",
						});
					}}
				>
					Send Message
					<div className="pl-2">
						<PaperPlaneIcon />
					</div>
				</Button>
			</form>
		</Form>
	);
};

export default ReachOutForm;
