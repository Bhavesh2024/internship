import React from "react";
import ProductCarousel from "./ProductCarousel";
import SearchProductCard from "../../product/SearchProductCard";

const ProductCarouselContainer = () => {
	return (
		<div className="m-10">
			<ProductCarousel />
			<SearchProductCard />
		</div>
	);
};

export default ProductCarouselContainer;
