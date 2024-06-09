import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "../ui/card";
import styles from "./contactCard.module.css";
import {
	EnvelopeClosedIcon,
	PersonIcon,
	SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const contactDetails = [
	{
		icon: <EnvelopeClosedIcon />,
		text: "example@email.com",
	},
	{
		icon: <PersonIcon />,
		text: "9182736455",
	},
	{
		icon: <SewingPinFilledIcon />,
		text: "Gopal Nagar, Bhopal, Madhya Pradesh",
	},
];

const ContactCard = () => {
	return (
		<Card className={styles.card}>
			<CardHeader className="flex-1">
				<CardTitle className=" text-[1.3rem] font-family: Montserrat, font-medium sans-serif text-[#515254]">
					Contact Us
				</CardTitle>
				<CardDescription>
					We are here for you 24/7. Our customer success team has 82% response
					rate!
				</CardDescription>
			</CardHeader>
			<CardContent className="mt-3 flex-grow-[2] flex flex-col justify-start gap-3">
				{contactDetails.map((detail, _) => (
					<Button
						className={`flex justify-start text-start gap-2 ${
							Math.floor(contactDetails.length / 2) === _
								? "bg-[var(--accent-foreground)] text-[var(--primary-foreground)]"
								: ""
						}`}
						key={_}
					>
						<div>{detail.icon}</div>
						<div className=" text-ellipsis whitespace-nowrap overflow-hidden">
							{detail.text}
						</div>
					</Button>
				))}
			</CardContent>
		</Card>
	);
};

export default ContactCard;
