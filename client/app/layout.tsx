import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const open_sans_init = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-open-sans",
});
const montserrat_init = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-montserrat",
});
export const metadata: Metadata = {
	title: "Medifmed",
	description: "Your one stop solution for all your medical equipment needs.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${open_sans_init.variable} ${montserrat_init.variable} min-h-screen`}
			>
				<div className={`min-h-screen flex flex-col font-openSans`}>
					<Navbar />
					<div className="flex flex-grow">{children}</div>
					<Toaster />
				</div>
			</body>
		</html>
	);
}
