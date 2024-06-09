import { Suspense } from "react";
import ProductCreateForm from "./ProductCreateForm";

const page = async () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProductCreateForm />
		</Suspense>
	);
};

export default page;
