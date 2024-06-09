import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ProductsGrid from "@/components/product/ProductsGrid";
import ProductFilters from "@/components/product/productFilters/ProductFilters";

const page = async () => {
	return (
		<div className="mx-auto flex flex-col max-w-[1024px] pt-8 px-2 md:px-0">
			<div className="h-[80px]">
				<BreadCrumb />
			</div>
			<div className="flex-grow flex flex-col md:flex-row">
				<div className="basis-1/3 hidden md:flex">
					<ProductFilters />
				</div>
				<div className="basis-2/3">
					<div className="flex flex-col gap-3">
						<ProductsGrid />
					</div>
				</div>
			</div>
			<div>footer</div>
		</div>
	);
};

export default page;
