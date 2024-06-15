import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ProductsGrid from "@/components/product/ProductsGrid";
import ProductFilterRow from "@/components/product/productFilterMobile/productFilterRow/ProductFilterRow";
import ProductFilters from "@/components/product/productFilters/ProductFilters";
import styles from "./productPage.module.css";

const page = async () => {
	return (
		<>
			<div className="scroll-auto">
				<div
					className={`${styles.boxShadow} fixed bottom-0 flex md:hidden w-full`}
				>
					<ProductFilterRow />
				</div>
			</div>
			<div className="pt-nav-padding mx-auto flex flex-col max-w-[1024px] px-2">
				<div className="h-[80px]">
					<BreadCrumb />
				</div>
				<div className="flex-grow flex flex-col md:flex-row gap-10">
					<div className="basis-[25%] hidden md:flex w-full">
						<ProductFilters />
					</div>
					<div className="basis-[75%]">
						<div className="flex flex-col gap-3">
							<ProductsGrid />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
