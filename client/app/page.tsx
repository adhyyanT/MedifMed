import Carousel from "@/components/carousel/Carousel";
import ContactCard from "@/components/contactCard/ContactCard";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ReachOutForm from "@/components/reachOutForm/ReachOutForm";

import { Category } from "@/types/Category";

const getCategories = async () => {
	const resp = await fetch("http://localhost:5179/api/category/categories");
	return resp.json();

	// return t as Category[];
};

export default async function Home() {
	const categories: Category[] = await getCategories();
	console.log(categories);
	return (
		<div className="w-full flex gap-12 flex-col">
			<Hero></Hero>
			<div className="flex md:max-w-[unset]  px-7 md:px-[8rem] lg:px-[12rem] xl:px-[15rem]  w-full justify-center">
				<div className="mt-[2rem] w-full">
					<Header showSeparator={true} title="Shop by Categories" />
					<Carousel data={categories} />
				</div>
			</div>
			<div className="flex md:max-w-[unset]  px-7 md:px-[8rem] lg:px-[12rem] xl:px-[15rem]  w-full justify-center">
				<div className="mt-[2rem] w-full">
					<Header showSeparator={true} title="Featured Products" />
					<Carousel data={categories} />
				</div>
			</div>
			<div className="flex md:max-w-[unset]  md:px-[8rem] lg:px-[12rem] xl:px-[15rem]  w-full justify-center">
				<div className="mt-[2rem] w-full">
					<div className="flex justify-center pt-5 gap-3">
						<ContactCard />
						<ReachOutForm title="Looking for something specific?" />
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
