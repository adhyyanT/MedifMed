import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
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
		<div className="w-full">
			<Hero></Hero>
			<div className="flex md:max-w-[unset]  px-7 md:px-[10rem] lg:px-[14rem]  w-full justify-center">
				<div className="mt-[2rem] w-full">
					<Header title="Shop by categories" />
					<Carousel data={categories} />
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
