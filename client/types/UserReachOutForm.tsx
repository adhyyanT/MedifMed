import { z } from "zod";

export const reachOutFormSchema = z.object({
	firstName: z.string().max(15).min(1, { message: "First name is required" }),
	lastName: z.string().max(15).min(1, { message: "Last name is required." }),
	email: z.string().email(),
	phoneNumber: z
		.string()
		.length(10, { message: "Please enter your 10 digit number" }),
	message: z
		.string()
		.max(500, { message: "Your message can only have upto 500 characters" })
		.min(10, { message: "Your message must have atleast 10 characters" }),
});
