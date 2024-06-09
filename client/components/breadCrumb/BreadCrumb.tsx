"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BreadCrumb = () => {
	const path = usePathname()?.split("/");
	return (
		<div>
			<Breadcrumb>
				<BreadcrumbList>
					{path?.map((p, index) => (
						<React.Fragment key={index}>
							{index === 0 ? (
								<>
									<BreadcrumbItem>
										<BreadcrumbLink href="/">Home</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
								</>
							) : path.length - 1 === index ? (
								<BreadcrumbItem>
									<BreadcrumbLink href={p}>{p}</BreadcrumbLink>
								</BreadcrumbItem>
							) : (
								<>
									<BreadcrumbItem>
										<BreadcrumbLink href={p}>{p}</BreadcrumbLink>
									</BreadcrumbItem>

									<BreadcrumbSeparator />
								</>
							)}
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default BreadCrumb;
