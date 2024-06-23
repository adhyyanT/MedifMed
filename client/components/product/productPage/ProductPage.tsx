import { getProduct, getProductDetails, getProductImages } from "@/api/product";
import { Product } from "@/types/Product";
import { ProductDetail } from "@/types/ProductDetail";
import { ProductImage } from "@/types/ProductImage";
import { Response } from "@/types/Response";
import { useEffect, useState } from "react";

type ProductPageProps = {
	productId: string | undefined;
};

const ProductPage = ({ productId }: ProductPageProps) => {
	if (!productId) return <div>Not Found</div>;

	const [productDetails, setProductDetails] =
		useState<Response<ProductDetail[]>>();

	const [product, setProduct] = useState<Product>();
	const [productImages, setProductImages] = useState<ProductImage[]>();

	useEffect(() => {
		(async () => {
			const details = await getProductDetails(productId);
			const product = await getProduct(productId);
			const productImages = await getProductImages(productId);
			if (productImages.data) setProductImages(productImages.data);
			if (product.data) setProduct(product.data);
			if (details.data) setProductDetails(details);
			console.log(details, product, productImages);
		})();
	}, []);

	return <div>ProductPage {productId}</div>;
};

export default ProductPage;
