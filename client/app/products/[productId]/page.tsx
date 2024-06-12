"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const page = () => {
	const params = useParams<{ productId: string }>();
	return <div>product page {params?.productId}</div>;
};

export default page;
