"use client";
import ProductPage from "@/components/product/productPage/ProductPage";
import { useParams } from "next/navigation";

const Page = () => {
	const param = useParams<{ productId: string }>();

	return (
		<div className="pt-nav-padding mx-auto flex flex-col max-w-[1024px] px-2">
			<ProductPage productId={param?.productId} />
		</div>
	);
};

export default Page;
