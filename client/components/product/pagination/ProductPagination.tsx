"use client";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
type ProductPaginationType = {
	totalPage: number;
	currPage: number;
};
const ProductPagination = ({ totalPage, currPage }: ProductPaginationType) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const handlePageChange = (delta: number) => {
		const current = new URLSearchParams(
			Array.from(searchParams?.entries() ?? [])
		);

		const value = currPage + delta > 0 ? currPage + delta : null;

		if (value) current.set("page", value.toString());

		const search = current.toString();

		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	};
	return (
		<Pagination className="pb-[100px]">
			<PaginationContent>
				{currPage !== 1 && (
					<PaginationItem className="hover:cursor-pointer">
						<PaginationPrevious onClick={() => handlePageChange(-1)} />
					</PaginationItem>
				)}
				{Array.from(Array(totalPage)).map((val, index) => {
					if (index < 3)
						return (
							<PaginationItem key={index}>
								<PaginationLink href="#" isActive={index === currPage - 1}>
									{index + 1}
								</PaginationLink>
							</PaginationItem>
						);
					else
						return (
							<PaginationItem key={index}>
								<PaginationEllipsis />
							</PaginationItem>
						);
				})}
				{currPage !== totalPage && (
					<PaginationItem className="hover: cursor-pointer">
						<PaginationNext onClick={() => handlePageChange(1)} />
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	);
};

export default ProductPagination;
