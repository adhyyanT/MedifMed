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
		icon: <PersonIcon />,
		text: "9182736455",
	},
	{
		icon: <EnvelopeClosedIcon />,
		text: "example@email.com",
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
				<CardTitle>Contact Us</CardTitle>
				<CardDescription>
					We are here for you 24/7. Our customer success team has 82% response
					rate!
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow-[2] flex flex-col justify-start">
				{contactDetails.map((detail, _) => (
					<Button className="flex justify-start text-start" key={_}>
						{detail.text}
					</Button>
				))}
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	);
};

export default ContactCard;
