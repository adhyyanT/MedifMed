import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

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
			<body>
				<div
					className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden`}
				>
					<Navbar />
					<div className="flex flex-grow">{children}</div>
				</div>
			</body>
		</html>
	);
}
